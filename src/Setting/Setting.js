import React from "react";
import ChapBox from "../page/Boxs/ChapBox";
import Ikkibox from "../page/Boxs/Ikkibox";

export default function Setting() {
  return (<div>
    <div className="setting">
        <div className="chapsetting">
            <ChapBox />
        </div>
        <div className="ongsetting">
            <Ikkibox />
            <h1>Night Mode</h1>
            <span className="dumaloq"></span>
            <span className="oq"></span>
        </div>
    </div>
  </div>);
}