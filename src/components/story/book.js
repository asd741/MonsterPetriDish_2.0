import React, { useEffect, useState } from "react";
import "./book.sass";
const Book = () => {
  let aPage, aPageDegs = [], gap, space = 25;
  useEffect(() => {//自適應頁數增減
    // let aMidPage = document.getElementsByClassName('mid-page'), space = 25;
    // gap = space / (aMidPage.length + 1);//+1是首頁 因為首頁也要分到角度
    // aPage = document.getElementsByClassName('page');
    // aPage[0].style = `transform: rotateY(${-space}deg)`;//封面
    // aPage[aPage.length - 1].style = `transform: rotateY(0deg)`;//底頁
    // [].forEach.call(aMidPage, (item, index) => {
    //   const d = (aMidPage.length - index) * gap;
    //   item.style = `transform: rotateY(${-d}deg);z-index:${aMidPage.length - index}`
    // })
    aPage = document.getElementsByClassName('page');
    // 假設共5頁 =>25 18 12 6 0，25度分給4個對象
    gap = space / (aPage.length - 1);//最後一頁是0度、其他均分度數
    [].forEach.call(aPage, (item, index) => {
      item.style.zIndex = aPage.length - index;
      //length=5  index=01234  gap*4  gap*3 gap*2 gap*1 gap*0
      const d = -(aPage.length - 1 - index) * gap;
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
      thatdeg,
      leftBeyond = aPageDegs[index - 1] || -180,
      rightBeyond = aPageDegs[index + 1] || 0,
      oWrap = document.getElementsByClassName('book-page-wrapper')[0],
      handleBeyond = () => {//判斷是否摸到隔壁的紙
        console.log(leftBeyond, thatdeg, rightBeyond);

        if (thatdeg < leftBeyond || thatdeg > rightBeyond) {
          that.style.transform = `rotateY(${thatdeg}deg`;
          aPageDegs[index] = thatdeg;//記錄該頁的角度
          return true;
        }
        // if (Math.abs(thatdeg) + gap >= Math.abs(aPageDegs[index - 1]) || Math.abs(thatdeg) + gap <= Math.abs(aPageDegs[index + 1])) {
        //   // that.style.transform = `rotateY(${aPageDegs[index - 1]+gap}deg`;
        //   // console.log('摸到隔壁的紙了');
        //   return true;
        // }
      },
      handleTransition = () => {
        if (vX && that && thatdeg && Math.abs(vX) >= 0.1 && thatdeg > -180 && thatdeg <= 0) {
          if (handleBeyond() === true) {
            return;
          }
          thatdeg = thatdeg - (vX * 0.2);
          that.style.transform = `rotateY(${thatdeg}deg`;
          Math.abs(Math.abs(thatdeg) - 90) < 20 ? vX *= 1.05 : vX *= 0.95;//兩個abs是解決90度左右很難翻頁的問題，然後*=是做受力運動
          requestAnimationFrame(handleTransition);
          aPageDegs[index] = thatdeg;
        }
      }
    oWrap.onmousemove = e => {
      vX = (sX - e.clientX) / 4;
      thatdeg = parseInt(that.style.transform.match(/-?\d+/)[0]);
      if (handleBeyond() === true) {
        return;
      }

      aPageDegs[index] = thatdeg;

      sX = e.clientX;
    }
    oWrap.onmouseup = () => {
      handleTransition();
      oWrap.onmousemove = null;
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
