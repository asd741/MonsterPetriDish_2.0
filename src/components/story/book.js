import React, { useEffect,useState } from "react";
import "./book.sass";
const Book=()=>{
    useEffect(()=>{//頁數平均分攤空間
      let aPage=document.getElementsByClassName('page'),
      aMidPage=document.getElementsByClassName('mid-page'),
      space=-25,
      gap=space/(aMidPage.length+1);//+1是首頁 因為首頁也要分到角度
      aPage[0].style=`transform: rotateY(${space}deg)`;
      aPage[aPage.length-1].style=`transform: rotateY(0deg)`;
      Array.prototype.forEach.call(aMidPage,(item,index)=>{
        const d=(aMidPage.length-index)*gap;
        item.style=`transform: rotateY(${d}deg);z-index:${aMidPage.length-index}`
      })
      for(let i=-1;aPage[++i];){
        aPage[i].onmousemove=()=>{
          console.log(i);
        }
      }
    })
    return (
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
    );
}
export default Book;
