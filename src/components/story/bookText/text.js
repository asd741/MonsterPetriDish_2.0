import React, { useState } from "react";
import './text.sass';
const Text = props => {
    let text = ["拖曳書本可翻頁", "主畫面", "功能列表"];
    let [index,hanldIndex]=useState(0);
    return (
      <div className="textwrap">
        <div className="text">{text[index]}</div>
      </div>
    );
}

export default Text;