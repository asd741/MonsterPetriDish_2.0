import React from "react";
import p12 from "../../images/p12.png";
import { Flex } from "antd-mobile";

const Page6 = props => {
  return (
    <div className="page6 page">
      <div className="front">
        <h3 className="title">進化選擇</h3>
        <img className="startImg" src={require("../../images/p11.png")} />
      </div>
      <div className="back" style={{display:'flex',flexDirection:'column'}}>
        {/* img size */}
        {/* width 869 height535 */}
        {/* height:width 1:1.62 */}
        {/* width:height 1:0.615 */}

        {/* container size */}
        {/* height:width 1:0.685 */}
        {/* width:height 1:1.46 */}

        <h3 className="title">（副本）</h3>
        <div
          className="p12-l"
          style={{
            margin: 'auto',
            width: "100%",
            height: "100%",
            background: `url(${p12}) left center no-repeat`,
            backgroundSize: '200% 100%'
          }}
          
        />
      </div>
    </div>
  );
};

export default Page6;
