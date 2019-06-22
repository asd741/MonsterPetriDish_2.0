import React from "react";
import p13 from "../../images/p13.png";
import p14 from "../../images/p14.png";

const Page8 = props => {
  return (
    <div className="page8 page">
      <div className="front"style={{display:'flex',flexDirection:'column'}}>
        <h3 className="title">遊玩畫面</h3>
        <div
          className="p13-r"
          style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            background: `url(${p13}) right center no-repeat`,
            backgroundSize: "200% 100%"
          }}
        />
      </div>
      <div className="back"style={{display:'flex',flexDirection:'column'}}>
        <h3 className="title">（副本）</h3>
        <div
          className="p14-l"
          style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            background: `url(${p14}) left center no-repeat`,
            backgroundSize: "200% 100%"
          }}
        />
      </div>
    </div>
  );
};

export default Page8;
