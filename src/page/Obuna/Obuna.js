import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ChapBox from "../Boxs/ChapBox";
import Ikkibox from "../Boxs/Ikkibox";
import { ContextYT } from "../../context/Context";

export default function Obuna() {
  let { obuna, setvid } = useContext(ContextYT);
  return (
    <div>
     <div className="qora">
     <div className="salom">
        <div className="chapsalom">
          <ChapBox />
        </div>
        <div className="ongsalom">
          <Ikkibox />
          <div className="obunachila">
            <div className="obuna">
              {obuna.map((o, i) => {
                return (
                  <div className="obunas" key={i}>
                    <NavLink to={"/obunam"} onClick={() => setvid(o)}>
                      <img src={o.rasmi} alt="" />
                    </NavLink>
                    <b>{o.nomi}</b>
                    <p>{o.obunachisi}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="obunachila">
            <div className="obuna">
              {obuna.map((o, i) => {
                return (
                  <div className="obunas" key={i}>
                    <NavLink to={"/obunam"} onClick={() => setvid(o)}>
                      <img src={o.rasmi} alt="" />
                    </NavLink>
                    <b>{o.nomi}</b>
                    <p>{o.obunachisi}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="obunachila">
            <div className="obuna">
              {obuna.map((o, i) => {
                return (
                  <div className="obunas" key={i}>
                    <NavLink to={"/obunam"} onClick={() => setvid(o)}>
                      <img src={o.rasmi} alt="" />
                    </NavLink>
                    <b>{o.nomi}</b>
                    <p>{o.obunachisi}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}
