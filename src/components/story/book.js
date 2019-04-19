import React, { useEffect, useState } from "react";
import "./book.sass";
const Book = () => {
  let aPage, aPageDegs = [], gap;
  useEffect(() => {//自適應頁數增減
    let aMidPage = document.getElementsByClassName('mid-page'), space = 25;
    gap = space / (aMidPage.length + 1);//+1是首頁 因為首頁也要分到角度
    aPage = document.getElementsByClassName('page');
    aPage[0].style = `transform: rotateY(${-space}deg)`;//封面
    aPage[aPage.length - 1].style = `transform: rotateY(0deg)`;//底頁
    [].forEach.call(aMidPage, (item, index) => {
      const d = (aMidPage.length - index) * gap;
      item.style = `transform: rotateY(${-d}deg);z-index:${aMidPage.length - index}`
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
      oWrap = document.getElementsByClassName('book-page-wrapper')[0],
      penetrateJudge = () => {
        if (Math.abs(thatdeg) + gap >= Math.abs(aPageDegs[index - 1]) || Math.abs(thatdeg) + gap <= Math.abs(aPageDegs[index + 1])) {
          that.style.transform = `rotateY(${aPageDegs[index - 1]+gap}deg`;
          console.log('摸到隔壁的紙了');
          return true;
        }
      },
      handleTransition = () => {

        if (vX && that && thatdeg && Math.abs(vX) >= 0.1 && thatdeg > -180 && thatdeg <= 0) {
          if (penetrateJudge() === true) {
            return;
          }
          thatdeg = thatdeg - (vX * 0.2);
          that.style.transform = `rotateY(${thatdeg}deg`;
          Math.abs(Math.abs(thatdeg) - 90) < 20 ? vX *= 1.05 : vX *= 0.95;//兩個abs是解決90度左右很難翻頁的問題，然後*=是做受力運動
          requestAnimationFrame(handleTransition);
          aPageDegs[index] = thatdeg;
        }
      }
      console.log(index,aPageDegs);
    oWrap.onmousemove = e => {
      vX = (sX - e.clientX) / 4;
      thatdeg = parseInt(that.style.transform.match(/-?\d+/)[0]);
      if (penetrateJudge() === true) {
        return;
      }
      if ((thatdeg - vX) <= -180 || (thatdeg - vX) >= 0) {
        thatdeg = Math.max(-180, thatdeg);
        thatdeg = Math.min(0, thatdeg);
        that.style.transform = `rotateY(${thatdeg}deg`;
      } else {
        that.style.transform = `rotateY(${thatdeg - vX}deg`;
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
