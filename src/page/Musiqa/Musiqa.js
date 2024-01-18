import React, { useContext } from "react";
import ChapBox from "../Boxs/ChapBox";
import { ContextYT } from "../../context/Context";

export default function Musiqa() {
  let { setvid, videos } = useContext(ContextYT);
  return (
    <div>
      <div className="explore">
        <ChapBox />
        <div className="ongexplore">
          <div className="cardlar">
            <div className="card">
              <div className="videolars">
                {videos.map((elem, i) => {
                  return (
                    <div className="videoss" key={i}>
                      <div onClick={() => setvid(elem)}>
                        <img src={elem.imege} alt="" />
                      </div>{" "}
                      <div className="nomi">
                        <div className="tits">
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
              <div className="videolars">
                {videos.map((elem, i) => {
                  return (
                    <div className="videoss" key={i}>
                      <div onClick={() => setvid(elem)}>
                        <img src={elem.imege} alt="" />
                      </div>
                      <div className="nomi">
                        <div className="tits">
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
  );
}
