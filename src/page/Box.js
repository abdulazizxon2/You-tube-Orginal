import React, { useContext } from "react";
import { ContextYT } from "../context/Context";
import ChapBox from "./Boxs/ChapBox";
import UchBox from "./Boxs/UchBox";
import Ikkibox from "./Boxs/Ikkibox";

export default function Box() {
  let {  open } = useContext(ContextYT);
  return (<div>
    <div className="box">
      <ChapBox />
      <div className={open ? "ongBox open" : "ongBox"}>
      <Ikkibox />
        <UchBox />
      </div>
    </div>
  </div>);
}