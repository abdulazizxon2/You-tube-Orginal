import React, { useContext } from "react";
import ChapBox from "./ChapBox";
import Ikkibox from "./Ikkibox";
import { ContextYT } from "../../context/Context";

export default function Explore() {
  let { setvid, videos,open } = useContext(ContextYT);
  return (
    <div>
  <div className="qora">
  <div className="explore">
        <ChapBox />
        <div className={open ? "ongexplore open" : "ongexplore"}>
          <Ikkibox />
          <div className="cardlar">
            <div className="card">
              <div className="videolar">
                {videos.map((elem, i) => {
                  return (
                    <div className="videos" key={i}>
                      <div onClick={() => setvid(elem)}>
                        <img src={elem.img} alt="" />
                      </div>{" "}
                      <div className="nomi">
                        <img className="profile" src={elem.profile} alt="" />
                        <div className="tit">
                          <b>{elem.title}</b>
                          <p>{elem.aUthor}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card">
              <div className="videolar">
                {videos.map((elem, i) => {
                  return (
                    <div className="videos" key={i}>
                      <div onClick={() => setvid(elem)}>
                        <img src={elem.img} alt="" />
                      </div>
                      <div className="nomi">
                        <img className="profile" src={elem.profile} alt="" />
                        <div className="tit">
                          <b>{elem.title}</b>
                          <p>{elem.aUthor}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    </div>
  );
}
