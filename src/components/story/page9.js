import React from "react";
import p14 from "../../images/p14.png";
import p15 from "../../images/p15.png";

const Page9 = props => {
  return (
    <div className="page9 page">
      <div className="front"style={{display:'flex',flexDirection:'column'}}>
        <h3 className="title">選擇音樂</h3>
        <div
          className="p14-r"
          style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            background: `url(${p14}) right center no-repeat`,
            backgroundSize: "200% 100%"
          }}
        />
      </div>
      <div className="back"style={{display:'flex',flexDirection:'column'}}>
        <h3 className="title">（副本）</h3>
        <div
          className="p15-l"
          style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            background: `url(${p15}) left center no-repeat`,
            backgroundSize: "200% 100%"
          }}
        />
      </div>
    </div>
  );
};

export default Page9;
