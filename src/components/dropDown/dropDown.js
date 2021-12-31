import React, { useState, useEffect } from "react";
import { KeyboardArrowDown } from "@material-ui/icons";
import "./dropDown.css";

function DropDown({ title, options, selectFunc, id }) {
  let [ddAct, setDDAct] = useState(false);
  let [titleVal, setTitleVal] = useState(title);
  let fntSz = "1.5rem";
  //   let dropDown = document.getElementById("dropDownCont1");
  let ddTitle = document.getElementById("dropDownCont1title");
  let ddWindow = document.getElementById("dropDownCont1Wind");
  useEffect(() => {
    let handler = (event) => {
      if (event.target !== ddTitle && event.target !== ddWindow) {
        setDDAct(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [ddAct, ddTitle, ddWindow]);
  return (
    <div className="dropDownCont">
      <div
        className="dropdownTitle"
        onClick={() => setDDAct(!ddAct)}
        id="dropDownCont1title"
      >
        {titleVal}
        <KeyboardArrowDown
          className="arrowIcon"
          style={{ fontSize: fntSz, color: "white" }}
        />
      </div>
      <div
        className={ddAct ? "dropdownOptCont actvDropDown" : "dropdownOptCont"}
        id="dropDownCont1Wind"
      >
        {options &&
          options.map((elem, index) => {
            return (
              <li
                className="dropDownOpt"
                key={`options${index}`}
                onClick={() => {
                  selectFunc(elem);
                  setTitleVal(elem);
                }}
              >
                {elem}
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default DropDown;
