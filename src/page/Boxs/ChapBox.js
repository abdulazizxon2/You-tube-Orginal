import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextYT } from "../../context/Context";

export default function ChapBox() {
  let { clickOpen, open } = useContext(ContextYT);
  
  return (
    <div>
      <div className={open ? "chapbox open" : "chapbox"}>
        <div className="birBox">
        <div className="boxes">
        <div className="nav_hamburger">
            <label className="hamburger" htmlFor="check" onClick={clickOpen}>
              <i className="fa-solid fa-bars"></i>
            </label>
          </div>
          <div className="logo">
            <i className="fa-brands fa-youtube"></i>
            <h1>YouTube</h1>
          </div>
        </div>
          <div className="ongnavbar">
            <div className="icons">
              <i className="fa-solid fa-folder-plus" title="Saved"></i>
              <i className="fa-regular fa-bell" title="News"></i>
            </div>
            <img src="./img/User-Avatar.jpg" alt="" title="Your profile" />
          </div>
          <NavLink to={"/"}>
            <div className="pages">
              <i className="fa-solid fa-house"></i>
              <b>Home</b>
            </div>
          </NavLink>
          <NavLink to={"/explore"}>
            <div className="pages">
              <i className="fa-regular fa-compass"></i>
              <h5>Explore</h5>
            </div>
          </NavLink>
          <NavLink to={"/obuna"}>
            <div className="pages">
              <i className="fa-solid fa-video"></i>
              <h5>Obunachilar</h5>
            </div>
          </NavLink>
        </div>
        <div className="accaunt">
          <b>
            Вы сможете ставить отметки "Нравится", писать комментарии и
            подписываться на каналы.
          </b>
          <input type="submit" name="" id="acc" value="Войти" />
        </div>
        <div className="birBox">
          <NavLink to={"/kitob"}>
            <div className="pages">
              <i className="fa-regular fa-file-video"></i>
              <h5>Librery</h5>
            </div>
          </NavLink>
          <NavLink to={"/history"}>
            <div className="pages">
              <i className="fa-solid fa-clock-rotate-left"></i>
              <h5>History</h5>
            </div>
          </NavLink>
          <NavLink to={"/musiqa"}>
            <div className="pages">
              <i className="fa-solid fa-music"></i>
              <h5>Music</h5>
            </div>
          </NavLink>
          <NavLink to={"/your"}>
            <div className="pages">
              <i className="fa-solid fa-video"></i>
              <h5>Your Videos</h5>
            </div>
          </NavLink>
          <NavLink to={"setting"}>
            <div className="pages">
              <i className="fa-solid fa-gear"></i>
              <h5>Setting</h5>
            </div>
          </NavLink>
          <div className="pages">
            <i className="fa-solid fa-angle-left fa-rotate-270"></i>
            <h5>Show More</h5>
          </div>
        </div>
        <div className="substicriptons">
          <div className="kantakt">
            <img src="./img/User-Avatar.png" alt="" />
            <b>James Gouse</b>
          </div>
          <div className="kantakt">
            <img src="./img/User-Avatar.png" alt="" />
            <b>James Gouse</b>
          </div>
          <div className="kantakt">
            <img src="./img/User-Avatar.png" alt="" />
            <b>James Gouse</b>
          </div>
          <div className="kantakt">
            <img src="./img/User-Avatar.png" alt="" />
            <b>James Gouse</b>
          </div>
          <div className="kantakt">
            <img src="./img/User-Avatar.png" alt="" />
            <b>James Gouse</b>
          </div>
          <div className="kantakt">
            <img src="./img/User-Avatar.png" alt="" />
            <b>James Gouse</b>
          </div>
          <div className="kantakt">
            <img src="./img/User-Avatar.png" alt="" />
            <b>James Gouse</b>
          </div>
        </div>
      </div>
    </div>
  );
}
