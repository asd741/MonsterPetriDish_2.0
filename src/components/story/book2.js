import React, { useEffect, useState } from "react";
import Cover from "./cover";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Page8 from "./page8";
import Page9 from "./page9";
import Page10 from "./page10";
import Page11 from "./page11";
import Page12 from "./page12";
import LastPage from "./lastpage";
import "./book.sass";
const Book2 = () => {
  const isMobi = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );
  let oWrap,
    aPage,
    aPageDegs = [],
    gap,
    space = 40;
  useEffect(() => {
    //角度與層級初始化
    oWrap = document.getElementsByClassName("book-page-wrapper")[0];
    aPage = document.getElementsByClassName("page");
    gap = space / (aPage.length - 1); //最後一頁是0度、其他均分度數
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
    });
    oWrap.ondragstart = () => {
      return false;
    };
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
  });
  let handleTurnPage = (e, domObj) => {
    let that = domObj,
      index = [].indexOf.call(aPage, that),
      sX = isMobi === true ? e.touches[0].clientX : e.clientX,
      thatdeg = aPageDegs[index];
    if (isMobi === true) {
      oWrap.ontouchmove = e => {
        let goalDeg;
        if (sX - e.touches[0].clientX >= 0) {//往左翻頁
            if(aPageDegs[index-1]===undefined){
                goalDeg=-180;
            }else{
                goalDeg=aPageDegs[index-1]+gap;
            }
        }
        if (sX - e.touches[0].clientX <= 0) {//往右翻頁
            if(aPageDegs[index+1]===undefined){
                goalDeg=0;
            }else{
                goalDeg=aPageDegs[index+1]-gap;
            }
        }
        that.style.transform = `rotateY(${goalDeg}deg)`;
        aPageDegs[index]=goalDeg;
      };
      oWrap.ontouchend = () => {
        oWrap.ontouchmove = null;
      };
    }
    if (isMobi === false) {
      oWrap.onmousemove = e => {
        let goalDeg;
        if (sX - e.clientX >= 0) {//往左翻頁
            if(aPageDegs[index-1]===undefined){
                goalDeg=-180;
            }else{
                goalDeg=aPageDegs[index-1]+gap;
            }
        }
        if (sX - e.clientX <= 0) {//往右翻頁
            if(aPageDegs[index+1]===undefined){
                goalDeg=0;
            }else{
                goalDeg=aPageDegs[index+1]-gap;
            }
        }
        that.style.transform = `rotateY(${goalDeg}deg)`;
        aPageDegs[index]=goalDeg;
      };
      oWrap.onmouseup = () => {
        oWrap.onmousemove = null;
      };
    }
  };

  return (
    <div className="book-page-wrapper">
      <div className="book">
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
};
export default Book2;
