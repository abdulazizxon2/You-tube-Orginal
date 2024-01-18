import React from "react";
import { NavLink } from "react-router-dom";

export default function Ikkibox() {
    return (<div>
        <div className="ikkiBox">
            <NavLink to={"/"}>
            <b>All</b>
            </NavLink>
            <NavLink to={"/explore"}>
            <b>Music</b>
            </NavLink>
            <NavLink to={"/"}>
            <b>Kino</b>
            </NavLink>
            <NavLink to={"/explore"}>
            <b className="bir">Music</b>
            </NavLink>
            <NavLink to={"/"}>
            <b className="bir">Kino</b>
            </NavLink>
            <NavLink to={"/explore"}>
            <b className="bir">Music</b>
            </NavLink>
            <NavLink to={"/"}>
            <b className="bir">Kino</b>
            </NavLink>
        </div>
    </div>);
}