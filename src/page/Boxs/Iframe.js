import React, { useContext } from "react";
import ChapBox from "./ChapBox";
import { useParams } from "react-router-dom";
import { ContextYT } from "../../context/Context";
export default function Iframe() {
  let { videos } = useContext(ContextYT);

  let yangi = useParams()?.id,
    t = videos.filter((p) => p.id === +yangi)[0];
  return (
    <div>
    <div className="qora">
    <div className="boxes">
        <ChapBox />
        <div className="videoCards">
          <div className="cardx ">
            <div className="chapyol">
              <div className="cardss">
                <iframe
                  width="967"
                  height="600"
                  src={t.link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
            <div className="yol">
              <div className="ongyol">
                <div className="card">
                  <iframe
                    width="200"
                    height="150"
                    src={t.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="card">
                  <iframe
                    width="200"
                    height="150"
                    src={t.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="card">
                  <iframe
                    width="200"
                    height="150"
                    src={t.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="card">
                  <iframe
                    width="200"
                    height="150"
                    src={t.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
