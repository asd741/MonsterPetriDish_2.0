import React, { useEffect } from "react";
import "./book.sass";
const Book=()=>{
    useEffect(()=>{
      let aMidPage=document.getElementsByClassName('mid-page'),
      firstPageRotateY=-30,
      gap=3;
      document.getElementsByClassName('cover')[0].style=`transform: rotateY(${firstPageRotateY});`
      Array.prototype.forEach.call(aMidPage,(item,index)=>{
        const length=aMidPage.length,
        rotateYdeg=firstPageRotateY/length;
        item.style=`transform: rotateY(${rotateYdeg}deg);`
      })
      // aMidPage.forEach((item,index) => {
      //   console.log(item,index);
        
      // });
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
        <div className="last-page page">
          <h2 className="title">最後一頁</h2>
        </div>
      </div>
    );
}
export default Book;
