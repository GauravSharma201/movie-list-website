import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import DropDown from "../dropDown/dropDown";

const initialVal = {
  name: "",
  email: "",
  password: "",
  phone: "",
  profession: "",
};
function Home({ history }) {
  let [inputVal, setInputVal] = useState(initialVal);
  let inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputVal({ ...inputVal, [name]: value });
  };
  let submitHandler = (e) => {
    e.preventDefault();
    let str = JSON.stringify(inputVal);
    localStorage.setItem("userData", str);
    console.log("submit handler fired");
    console.log(inputVal);
    history.push("/login");
  };
  return (
    <section className="home">
      <div className="signUpCont">
        <div className="signUpHead">
          <h1>Sign-Up</h1>
        </div>
        <form
          action=""
          className="signUpForm"
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            type="text"
            name="name"
            className="signUpInp"
            value={inputVal.name}
            onChange={(e) => inputHandler(e)}
            placeholder="Name..."
          />
          <input
            type="email"
            name="email"
            className="signUpInp"
            value={inputVal.email}
            onChange={(e) => inputHandler(e)}
            placeholder="Email..."
          />
          <input
            type="password"
            name="password"
            className="signUpInp"
            value={inputVal.password}
            onChange={(e) => inputHandler(e)}
            placeholder="password..."
          />
          <input
            type="tel"
            name="phone"
            className="signUpInp"
            value={inputVal.phone}
            onChange={(e) => inputHandler(e)}
            placeholder="Phone..."
            minLength="10"
            maxLength="10"
          />
          <DropDown
            title={"profession"}
            options={["developer", "machinist", "marketing exec"]}
            selectFunc={(value) => {
              setInputVal({ ...inputVal, profession: value });
            }}
            id={"dropDown1"}
          />
          <button type="submit" className="btn">
            Sign-Up
          </button>
        </form>
        <Link to={"/login"} className="headerLogin">
          Login
        </Link>
      </div>
    </section>
  );
}

export default Home;
