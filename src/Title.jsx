import React from "react";
import Logo from "./logo.png";
export default function Title(){
   return( <div className="title--container">
        <img src={Logo} className="title--logo"/>
<h1 className="title--text">Zin Astrology</h1>
    </div>)
}