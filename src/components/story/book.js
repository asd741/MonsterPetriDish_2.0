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
  })
  return (
    <div className='book-page-wrapper'>
      <div className="book" onMouseDown={e => {
        const that=e.target;
        that.onmousemove=()=>{
          console.log(that,'move');
        }
        that.onmouseup=()=>{
          that.onmousemove=null;
          console.log(that,'move end');
        }
      }}>
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
