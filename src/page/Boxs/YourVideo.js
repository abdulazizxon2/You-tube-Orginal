import React, { useContext } from "react";
import ChapBox from "./ChapBox";
import Ikkibox from "./Ikkibox";
import { ContextYT } from "../../context/Context";
export default function YourVideo() {
  let { videos, setvid } = useContext(ContextYT);
  return (
    <div>
      <div className="yours">
        <div className="chapyour">
          <ChapBox />
        </div>
        <div className="ongyour">
          <Ikkibox />
          <div className="cardlar">
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
                          <p>{elem.pros}</p>
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
                          <p>{elem.pros}</p>
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
                          <p>{elem.pros}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="cardsh">
              <div className="videolar">
                {videos.map((elem, i) => {
                  return (
                    <div className="videos" key={i}>
                      <div onClick={() => setvid(elem)}>
                        <img src={elem.shortImg} alt="" />
                      </div>{" "}
                      <div className="nomi">
                        <div className="tit">
                          <b>{elem.title}</b>
                          <p>{elem.aUthor}</p>
                          <p>{elem.pros}</p>
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
