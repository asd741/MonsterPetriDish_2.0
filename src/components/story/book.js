import React, { useEffect, useState } from "react";
import "./book.sass";
const Book = () => {
  useEffect(() => {//自適應頁數增減
    let aPage = document.getElementsByClassName('page'),
      aMidPage = document.getElementsByClassName('mid-page'),
      space = -25,
      gap = space / (aMidPage.length + 1);//+1是首頁 因為首頁也要分到角度
    aPage[0].style = `transform: rotateY(${space}deg)`;//封面
    aPage[aPage.length - 1].style = `transform: rotateY(0deg)`;//底頁
    Array.prototype.forEach.call(aMidPage, (item, index) => {
      const d = (aMidPage.length - index) * gap;
      item.style = `transform: rotateY(${d}deg);z-index:${aMidPage.length - index}`
    })
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  })

  let handleTurnPage = e => {
    let that = e.target,
      sX = e.clientX,
      vX,
      thatdeg,
      oWrap = document.getElementsByClassName('book-page-wrapper')[0],
      handleTransition = () => {
        if (vX && that && thatdeg && Math.abs(vX) > 0.1) {
          thatdeg=thatdeg - vX;
          that.style.transform = `rotateY(${thatdeg}deg`;
          vX *= 0.95;
          console.log('vX', vX,'thatdeg',thatdeg);
          requestAnimationFrame(handleTransition);
        }
      }
    oWrap.onmousemove = e => {
      vX = (sX - e.clientX) / 2;
      thatdeg = parseInt(that.style.transform.match(/-?\d+/)[0]);
      if ((thatdeg - vX) < -180 || (thatdeg - vX) > 0) {
        thatdeg = Math.max(-180, thatdeg);
        thatdeg = Math.min(0, thatdeg);
        that.style.transform = `rotateY(${thatdeg}deg`;
      } else {
        that.style.transform = `rotateY(${thatdeg - vX}deg`;
      }
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
