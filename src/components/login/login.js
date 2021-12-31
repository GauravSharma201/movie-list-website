import React, { useState } from "react";
import "./login.css";

const initialVal = {
  email: "",
  password: "",
};
function Login({ history }) {
  let [inputVal, setInputVal] = useState(initialVal);

  let inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputVal({ ...inputVal, [name]: value });
  };

  let submitHandler = (e) => {
    e.preventDefault();
    let result = localStorage.getItem("userData");
    let data = JSON.parse(result);
    if (inputVal.email === data.email && inputVal.password === data.password) {
      history.push("/list");
    } else {
      alert("invalid credentials");
    }
  };
  return (
    <section className="loginSec">
      <div className="loginCont">
        <div className="signUpHead">
          <h1>Log-in</h1>
        </div>
        <form
          action=""
          className="loginForm"
          onSubmit={(e) => submitHandler(e)}
        >
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
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
