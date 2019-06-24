import React, { useState, Component } from "react";
import "./dl.index.sass";
import { connect } from "react-redux";
import reducer from "../layout.js";
import { Link } from "gatsby";
import '../../components/layout.sass';
const Index = () => {
  const [extra, handleExtra] = useState(0);

  return (
    <div id="dl-page">
      <h2 className="title">遊戲下載</h2>
      <p className="info">
        本產品為手機遊戲,請使用手機掃碼ＱＲcode進行下載,或使用手機點擊下載按鈕
      </p>
      <section className="main">
        <section className="dl-part">
          <img className="dl-qrcode" src={require("../../images/dl.png")} />
          <a
            href="http://bit.ly/2EwQpvG"
            className="dl-btn"
            target="_blank"
            onClick={() => {
              alert("您的下載已開始，請稍後，由於下載遊戲，觸發彩蛋");
              handleExtra(1);
            }}
          >
            下載
          </a>
        </section>
        <section className="text-part">
          <ul className="list-wrapper">
            <li className="list">軟體名字：魔物培養皿</li>
            <li className="list">檔案類型：.apk</li>
            <li className="list">系統需求：Android 4.4版本以上</li>
            <li className="list">檔案大小：89.9mb</li>
          </ul>
        </section>
      </section>
      <div className="navbar">
        <Link to="/" className="index-link">
          大廳
        </Link>
        <Link to="/story" className="story-link">
          故事
        </Link>
        <Link to="/role" className="role-link">
          角色
        </Link>
        <Link to="/download" className="download-link">
          下載
        </Link>
        {extra ? (
          <Link to="/other" className="other-link">
            彩蛋
          </Link>
        ) : null}
      </div>
    </div>
  );
};

// const Index = props => {

// };
export default Index;
// export default connect(reducer)(Index);
