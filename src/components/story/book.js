import React, { useEffect, useState } from "react";
import "./book.sass";
const Book = () => {
  let aPage, aPageDegs = [], gap, space = 25, readingPageIndex;
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
      thatDegRedress,
      isTouchBeyond = () => {//判斷是否摸到隔壁的紙，摸到的話就禁止繼續移動
        //-175  -170  -165
        //gap=5  thatdeg=-170
        //-170-5=-175   -170+5=-165
        if ((thatdeg - gap) < leftBeyond) {
          thatDegRedress = () => {
            thatdeg = parseInt(leftBeyond + gap);
            that.style.transform = `rotateY(${thatdeg}deg`;
            aPageDegs[index] = thatdeg;
          }
          touchBeyond = true;
          return;
        }
        if ((thatdeg + gap) > rightBeyond) {
          thatDegRedress = () => {
            thatdeg = parseInt(rightBeyond - gap);
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
        let vMaxDegIndex, vMaxDeg = 0, vDeg = 0;
        for (let i = 0; i < aPageDegs.length - 1; i++) {
          vDeg = Math.abs(aPageDegs[i] - aPageDegs[i + 1]);
          if (vMaxDeg < vDeg) {
            vMaxDegIndex = i;
            vMaxDeg = vDeg;
          }
        }
        if (Math.abs(aPageDegs[0]) < 90) {
          vMaxDegIndex = 0;
        }
        if (Math.abs(aPageDegs[aPageDegs.length - 1]) > 90) {
          vMaxDegIndex = aPage.length - 2;
        }
        if (readingPageIndex !== vMaxDegIndex) {
          readingPageIndex = vMaxDegIndex;
          indexChange(readingPageIndex);
        }
      },
      handleTransition = () => {
        isTouchBeyond();
        if (touchBeyond === false && Math.abs(vX) >= 1) {
          Math.abs(Math.abs(thatdeg) - 90) < 20 ? vX *= 1.05 : vX *= 0.95;//兩個abs是解決90度左右很難翻頁的問題，然後*=是做受力運動
          thatdeg = parseInt(thatdeg - (vX * 0.5));
          that.style.transform = `rotateY(${thatdeg}deg`;
          aPageDegs[index] = thatdeg;
          handleZ_Index();
          requestAnimationFrame(handleTransition);
        }
        if (touchBeyond === true) {
          thatDegRedress();
        }
      }
    oWrap.onmousemove = e => {
      isTouchBeyond();
      if (touchBeyond === false) {
        vX = (sX - e.clientX) / 3;
        thatdeg = parseInt(that.style.transform.match(/-?\d+/)[0] - vX);
        that.style.transform = `rotateY(${thatdeg}deg`;
        aPageDegs[index] = thatdeg;
        sX = e.clientX;
        handleZ_Index();
      }
      if (touchBeyond === true) {
        vX = 0;
        thatDegRedress();
      }
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
