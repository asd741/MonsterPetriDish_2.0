import React, { useEffect, useState } from "react";
import "./book.sass";
const Book = () => {
  let aPage, aPageDegs = [], gap, space = 25;
  useEffect(() => {//角度與層級初始化
    aPage = document.getElementsByClassName('page');
    gap = space / (aPage.length - 1);//最後一頁是0度、其他均分度數
    //length=5  index=01234  gap*4  gap*3 gap*2 gap*1 gap*0
    [].forEach.call(aPage, (item, index) => {
      item.style.zIndex = aPage.length - index;
      const d = -(aPage.length - 1 - index) * gap;
      aPageDegs[index] = d;
      item.style.transform = `rotateY(${d}deg)`;
    })
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  })
  let handleTurnPage = e => {
    let that = e.target,
      index = [].indexOf.call(aPage, that),
      sX = e.clientX,
      vX,
      thatdeg = aPageDegs[index],
      leftBeyond = aPageDegs[index - 1] || -180,
      rightBeyond = aPageDegs[index + 1] || 0,
      oWrap = document.getElementsByClassName('book-page-wrapper')[0],
      touchBeyond,
      isTouchBeyond = () => {//判斷是否摸到隔壁的紙
        //-175  -170  -165
        //gap=5  thatdeg=-170
        //-170-5=-175   -170+5=-165
        
        if ((thatdeg - gap) < leftBeyond) {
          thatdeg = parseInt(leftBeyond + gap);
          that.style.transform = `rotateY(${thatdeg}deg`;
          aPageDegs[index] = thatdeg;
          touchBeyond = true;
          return;
        }
        if ((thatdeg + gap) > rightBeyond) {
          thatdeg = parseInt(rightBeyond - gap);
          that.style.transform = `rotateY(${thatdeg}deg`;
          aPageDegs[index] = thatdeg;
          touchBeyond = true;
          return;
        }
        touchBeyond = false;
      },
      handleZ_Index = () => {
        // for (let i = 0; i < aPageDegs.length; i++) {
        //   console.log(aPageDegs[i]);
        // }
        // aPageDegs.reduce((vDeg, item, index) => { console.log(vDeg, item, index) });
      },
      handleTransition = () => {
        if (touchBeyond !== true && Math.abs(vX) >= 1) {
          thatdeg = parseInt(thatdeg - (vX * 0.5));
          that.style.transform = `rotateY(${thatdeg}deg`;
          Math.abs(Math.abs(thatdeg) - 90) < 20 ? vX*=1.05 : vX *= 0.95;//兩個abs是解決90度左右很難翻頁的問題，然後*=是做受力運動
          aPageDegs[index] = thatdeg;
          handleZ_Index();
          requestAnimationFrame(handleTransition);
        }
        isTouchBeyond();
      }
    oWrap.onmousemove = e => {
      if (touchBeyond !== true) {
        vX = (sX - e.clientX) / 2;
        thatdeg = parseInt(that.style.transform.match(/-?\d+/)[0] - vX);
        that.style.transform = `rotateY(${thatdeg}deg`;
        aPageDegs[index] = thatdeg;
        sX = e.clientX;
        handleZ_Index();
      } else {
        vX = 0;
      }
      isTouchBeyond();
    }
    oWrap.onmouseup = () => {
      oWrap.onmousemove = null;
      if (Math.abs(vX) >= 1) {
        requestAnimationFrame(handleTransition);
      }
    }
  }

  return (
    <div className='book-page-wrapper' onMouseDown={e => {
      if (e.target.classList.contains('page') === true) {
        handleTurnPage(e);
      }
    }}>
      <div className="book">
        <div className="cover page">
          <h2 className="title">遊戲手冊</h2>
        </div>
        <div className="mid-page page">
          <h2 className="title">中間頁面</h2>
        </div>
        <div className="mid-page page">
          <h2 className="title">中間頁面</h2>
        </div>
        <div className="mid-page page">
          <h2 className="title">中間頁面</h2>
        </div>
        <div className="mid-page page">
          <h2 className="title">中間頁面</h2>
        </div>
        <div className="last-page page">
          <h2 className="title">最後一頁</h2>
        </div>
      </div>
    </div>
  );
}
export default Book;
