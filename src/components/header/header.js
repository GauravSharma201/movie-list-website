import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  let [dis, setDis] = useState(false);
  let btn = document.getElementById("compInfo");
  let modal = document.getElementById("compInfoModal");
  let val1 = document.getElementById("modVal1");
  let val2 = document.getElementById("modVal2");
  let val3 = document.getElementById("modVal3");
  let val4 = document.getElementById("modVal4");
  let prop1 = document.getElementById("modProp1");
  let prop2 = document.getElementById("modProp2");
  let prop3 = document.getElementById("modProp3");
  let prop4 = document.getElementById("modProp4");
  useEffect(() => {
    let handler = (e) => {
      if (
        e.target !== btn &&
        e.target !== modal &&
        e.target !== val1 &&
        e.target !== val2 &&
        e.target !== val3 &&
        e.target !== val4 &&
        e.target !== prop1 &&
        e.target !== prop2 &&
        e.target !== prop3 &&
        e.target !== prop4
      ) {
        setDis(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [btn, modal, prop1, prop2, prop3, prop4, val1, val2, val3, val4]);
  return (
    <header className="header">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="logo">
          <h1>React Js</h1>
        </div>
      </Link>
      <div className="headerOpt">
        <div className="compInfo" onClick={() => setDis(!dis)} id="compInfo">
          Company Info
        </div>
        <div
          className={dis ? "compInfoModal actvDis" : "compInfoModal"}
          id="compInfoModal"
        >
          <div className="modOpt">
            <span className="modProp" id="modProp1">
              Company:{" "}
            </span>
            <span className="modValue" id="modVal1">
              Geeksynergy Technologies Pvt Ltd
            </span>
          </div>
          <div className="modOpt">
            <span className="modProp" id="modProp2">
              Address:{" "}
            </span>
            <span className="modValue" id="modVal2">
              Sanjayanagar, Bengaluru-56
            </span>
          </div>
          <div className="modOpt">
            <span className="modProp" id="modProp3">
              Phone:{" "}
            </span>
            <span className="modValue" id="modVal3">
              XXXXXXXX09
            </span>
          </div>
          <div className="modOpt">
            <span className="modProp" id="modProp4">
              Email:{" "}
            </span>
            <span className="modValue" id="modVal4">
              XXXXXX@gmail.com
            </span>
          </div>
        </div>
        {/* <span>Login</span> */}
      </div>
    </header>
  );
}

export default Header;
