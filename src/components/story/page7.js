import React from "react";
import p12 from "../../images/p12.png";
import p13 from "../../images/p13.png";

const Page7 = props => {
  return (
    <div className="page7 page">
      <div
        className="front"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3 className="title">分數結算</h3>
        <div
          className="p12-r"
          style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            background: `url(${p12}) right center no-repeat`,
            backgroundSize: "200% 100%"
          }}
        />
      </div>
      <div className="back"style={{display:'flex',flexDirection:'column'}}>
        <h3 className="title">（副本）</h3>
        <div className="p13-l" style={{
            margin: 'auto',
            width: "100%",
            height: "100%",
            background: `url(${p13}) left center no-repeat`,
            backgroundSize: '200% 100%'
          }}/>
      </div>
    </div>
  );
};

export default Page7;
