import React from "react";
import p15 from "../../images/p15.png";

const Page10 = props => {
  return (
    <div className="page10 page">
      <div
        className="front"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3 className="title">選擇難度</h3>
        <div
          className="p15-r"
          style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            background: `url(${p15}) right center no-repeat`,
            backgroundSize: "200% 100%"
          }}
        />
      </div>
      <div className="back">
        <h3 className="title">探索</h3>
        <img className="startImg" src={require("../../images/p16.png")} />
      </div>
    </div>
  );
};

export default Page10;
