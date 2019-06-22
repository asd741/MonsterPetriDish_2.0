import React, { useEffect, useState } from "react";
import Cover from './cover';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import Page6 from './page6';
import Page7 from './page7';
import Page8 from './page8';
import Page9 from './page9';
import Page10 from './page10';
import Page11 from './page11';
import Page12 from './page12';
import LastPage from './lastpage';
import "./book.sass";
// import { Toast } from "antd-mobile";
const Book = () => {
  const isMobi = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
  let oWrap,
    aPage,
    aPageDegs = [],
    gap,
    space = 40;
  useEffect(() => {//角度與層級初始化
    oWrap = document.getElementsByClassName('book-page-wrapper')[0];
    aPage = document.getElementsByClassName('page');
    gap = space / (aPage.length - 1);//最後一頁是0度、其他均分度數
    //length=5  index=01234  gap*4  gap*3 gap*2 gap*1 gap*0
    [].forEach.call(aPage, (item, index) => {
      // item.style.zIndex = aPage.length - index;
      const d = -(aPage.length - 1 - index) * gap;
      aPageDegs[index] = d;
      item.style.transform = `rotateY(${d}deg)`;
      if (isMobi === true) {

        item.ontouchstart = e => handleTurnPage(e, item);
      } else {

        item.onmousedown = e => handleTurnPage(e, item);
      }
    })
    oWrap.ondragstart = () => { return false };
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  })
  let handleTurnPage = (e, domObj) => {
    let that = domObj,
      index = [].indexOf.call(aPage, that),
      sX = isMobi === true ? e.touches[0].clientX : e.clientX,
      vX = 0,
      thatdeg = aPageDegs[index],
      touchBeyond,
      thatDegRedress,
      isTouchBeyond = () => {//判斷是否摸到隔壁的紙，摸到的話就禁止繼續移動
        //-175  -170  -165
        //gap=5  thatdeg=-170
        //-170-5=-175   -170+5=-165
        let leftBeyond = aPageDegs[index - 1] || -180,
          rightBeyond = aPageDegs[index + 1] || 0;
        if ((thatdeg - gap) < leftBeyond) {
          thatDegRedress = () => {
            thatdeg = leftBeyond + gap;
            if (Math.abs(Math.abs(thatdeg) - 90) < 10) {
              setTimeout(() => {
                thatdeg += 20;
                that.style.transform = `rotateY(${thatdeg}deg`;
                aPageDegs[index] = thatdeg;
              },666)
            }
            that.style.transform = `rotateY(${thatdeg}deg`;
            aPageDegs[index] = thatdeg;
          }
          touchBeyond = true;
          return;
        }
        if ((thatdeg + gap) > rightBeyond) {
          thatDegRedress = () => {
            thatdeg = rightBeyond - gap;
            if (Math.abs(Math.abs(thatdeg) - 90) < 10) {
              setTimeout(() => {
                thatdeg -= 20;
                that.style.transform = `rotateY(${thatdeg}deg`;
                aPageDegs[index] = thatdeg;
              },666)
            }
            that.style.transform = `rotateY(${thatdeg}deg`;
            aPageDegs[index] = thatdeg;
          }
          touchBeyond = true;
          return;
        }
        touchBeyond = false;
      },
      handleTransition = () => {
        isTouchBeyond();
        if (touchBeyond === false && Math.abs(vX) >= 1) {
          Math.abs(Math.abs(thatdeg) - 90) < 20 ? vX *= 1.05 : vX *= 0.95;//兩個abs是解決90度左右很難翻頁的問題，然後*=是做受力運動
          thatdeg = parseInt(thatdeg - (vX * 0.5));
          that.style.transform = `rotateY(${thatdeg}deg`;
          aPageDegs[index] = thatdeg;
          requestAnimationFrame(handleTransition);
        }
        if (touchBeyond === true) {
          thatDegRedress();
        }
      }
    if (isMobi === true) {
      oWrap.ontouchmove = e => {
        isTouchBeyond();
        if (touchBeyond === false) {
          vX = (sX - e.touches[0].clientX);
          thatdeg = parseInt(that.style.transform.match(/-?\d+/)[0] - vX);
          that.style.transform = `rotateY(${thatdeg}deg`;
          aPageDegs[index] = thatdeg;
          sX = e.touches[0].clientX;
        }
        if (touchBeyond === true) {
          thatDegRedress();
        }
      }
    } else {
      oWrap.onmousemove = e => {
        isTouchBeyond();
        if (touchBeyond === false) {
          vX = (sX - e.clientX) / 2.5;
          thatdeg = parseInt(that.style.transform.match(/-?\d+/)[0] - vX);
          that.style.transform = `rotateY(${thatdeg}deg`;
          aPageDegs[index] = thatdeg;
          sX = e.clientX;
        }
        if (touchBeyond === true) {
          thatDegRedress();
        }
      }
    }
    if (isMobi === true) {
      oWrap.ontouchend = () => {
        oWrap.ontouchmove = null;
        if (80 < Math.abs(thatdeg) < 100 && Math.abs(vX) <= 1) {
          vX += 3;
        }
        if (Math.abs(vX) >= 1) {
          requestAnimationFrame(handleTransition);
        }
      }
    } else {
      oWrap.onmouseup = () => {
        oWrap.onmousemove = null;
        // console.log(aPageDegs);
        console.log(Math.abs(thatdeg));
        if (80 < Math.abs(thatdeg) < 100 && Math.abs(vX) <= 1) {
          vX += 3;
        }
        if (Math.abs(vX) >= 1) {
          requestAnimationFrame(handleTransition);
        }
      }
    }

  }

  return (
    <div className='book-page-wrapper' onMouseOut={e=>{
      if(e.target.classList.contains('book-page-wrapper')){
        oWrap.onmousemove = null;
      }
    }}>
      <div className='book'>
        <Cover />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12 />
        <LastPage />
      </div>
    </div>
  );
}
export default Book;
