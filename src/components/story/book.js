import React, { useEffect, useState } from "react";
import Cover from './cover';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import LastPage from './lastpage';
import "./book.sass";
// import { Toast } from "antd-mobile";
const Book = () => {
  let oWrap, aPage, aPageDegs = [], gap, space = 25, readingPageIndex;

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
      item.onmousedown = e => handleTurnPage(e, item);
    })
    oWrap.ondragstart = () => { return false };
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  })
  let handleTurnPage = (e, domObj) => {
    let that = domObj,
      thatFront=that.getElementsByClassName('front')[0],
      index = [].indexOf.call(aPage, that),
      sX = e.clientX,
      vX,
      thatdeg = aPageDegs[index],
      leftBeyond = aPageDegs[index - 1] || -180,
      rightBeyond = aPageDegs[index + 1] || 0,
      touchBeyond,
      thatDegRedress,
      isTouchBeyond = () => {//判斷是否摸到隔壁的紙，摸到的話就禁止繼續移動
        //-175  -170  -165
        //gap=5  thatdeg=-170
        //-170-5=-175   -170+5=-165
        if ((thatdeg - gap) < leftBeyond) {
          thatDegRedress = () => {
            thatdeg = leftBeyond + gap;
            that.style.transform = `rotateY(${thatdeg}deg`;
            aPageDegs[index] = thatdeg;
          }
          touchBeyond = true;
          return;
        }
        if ((thatdeg + gap) > rightBeyond) {
          thatDegRedress = () => {
            thatdeg = rightBeyond - gap;
            that.style.transform = `rotateY(${thatdeg}deg`;
            aPageDegs[index] = thatdeg;
          }
          touchBeyond = true;
          return;
        }
        touchBeyond = false;
      },
      indexChange = readingPageIndex => {
        //一般看書的時候有兩頁都是最高層級(1 2 3 3 2 1)(單位:zIndex)
        //除非正在看第一頁(6 5 4 3 2 1)或最後一頁(1 2 3 4 5 6)(單位:zIndex)
        if (readingPageIndex === 0) {//正在看第一頁
          for (let i = 0; aPage[readingPageIndex + i]; i++) {//右頁以右，層級遞減
            aPage[readingPageIndex + i].style.zIndex = aPage.length - i;
          }
          return;
        }
        if (readingPageIndex >= aPage.length - 2) {//正在看最後一頁
          for (let i = 1; aPage[aPage.length - i]; i++) {//左頁以左，層級遞減
            aPage[aPage.length - i].style.zIndex = aPage.length - i;
          }
          return;
        }
        //正在書的中間(有兩個最高層級，左頁和右頁)
        for (let i = 0; aPage[readingPageIndex - i]; i++) {//左頁以左，層級遞減
          aPage[readingPageIndex - i].style.zIndex = aPage.length - i;
        }
        readingPageIndex += 1;//最高層級從左頁設定到右頁
        for (let i = 0; aPage[readingPageIndex + i]; i++) {//右頁以右，層級遞減
          aPage[readingPageIndex + i].style.zIndex = aPage.length - i;
        }
      },
      handleZ_Index = () => {
        // let vMaxDegIndex, vMaxDeg = 0, vDeg = 0;
        // for (let i = 0; i < aPageDegs.length - 1; i++) {
        //   vDeg = Math.abs(aPageDegs[i] - aPageDegs[i + 1]);
        //   if (vMaxDeg < vDeg) {
        //     vMaxDegIndex = i;
        //     vMaxDeg = vDeg;
        //   }
        // }
        // if (Math.abs(aPageDegs[0]) < 90) {
        //   vMaxDegIndex = 0;
        // }
        // if (Math.abs(aPageDegs[aPageDegs.length - 1]) > 90) {
        //   vMaxDegIndex = aPage.length - 2;
        // }
        let vMaxDegIndex, vMaxDeg = 0,vDegs=[];
        if (Math.abs(aPageDegs[aPageDegs.length - 1]) > 90) {//如果看的是第一頁
          vMaxDegIndex = aPage.length - 2;
        }else if(Math.abs(aPageDegs[0]) < 90){//如果看的是最後一頁
          vMaxDegIndex = 0;
        }else{//看的是中間的頁數
          for (let i = 0,vDeg; i < aPageDegs.length - 1; i++) {
            vDeg = Math.abs(aPageDegs[i] - aPageDegs[i + 1]);
            vDegs.push(vDeg);
            if (vMaxDeg < vDeg) {
              vMaxDegIndex = i;
              vMaxDeg = vDeg;
            }
          }
        }
        if (readingPageIndex !== vMaxDegIndex) {
          readingPageIndex = vMaxDegIndex;
          indexChange(readingPageIndex);
        }
      },
      handleTransition = () => {
        if (touchBeyond === false && Math.abs(vX) >= 1) {
          Math.abs(Math.abs(thatdeg) - 90) < 20 ? vX *= 1.05 : vX *= 0.95;//兩個abs是解決90度左右很難翻頁的問題，然後*=是做受力運動
          thatdeg = parseInt(thatdeg - (vX * 0.5));
          that.style.transform = `rotateY(${thatdeg}deg`;
          aPageDegs[index] = thatdeg;
          Math.abs(thatdeg)>90?thatFront.style.opacity=0:thatFront.style.opacity=1;
          requestAnimationFrame(handleTransition);
        }
        if (touchBeyond === true) {
          thatDegRedress();
        }
        isTouchBeyond();
        handleZ_Index();
      }
    oWrap.onmousemove = e => {
      if (touchBeyond === false) {
        vX = (sX - e.clientX) / 3;
        thatdeg = parseInt(that.style.transform.match(/-?\d+/)[0] - vX);
        that.style.transform = `rotateY(${thatdeg}deg`;
        Math.abs(thatdeg)>90?thatFront.style.opacity=0:thatFront.style.opacity=1;
        aPageDegs[index] = thatdeg;
        sX = e.clientX;
      }
      if (touchBeyond === true) {
        vX = 0;
        thatDegRedress();
      }
      isTouchBeyond();
      handleZ_Index();
    }
    oWrap.onmouseup = () => {
      if (80 < Math.abs(thatdeg) < 100 && Math.abs(vX) <= 1) {
        vX += 2;
      }
      oWrap.onmousemove = null;
      if (Math.abs(vX) >= 1) {
        requestAnimationFrame(handleTransition);
      }
    }
  }

  return (
    <div className='book-page-wrapper'>
      <div className='book'>
        <Cover deg={aPageDegs[0]}/>
        <Page1 deg={aPageDegs[1]}/>
        <Page2 />
        <Page3 />
        <Page4 />
        <LastPage />
      </div>
    </div>
  );
}
export default Book;
