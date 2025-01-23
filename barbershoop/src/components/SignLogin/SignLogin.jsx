import { useState } from "react";
import Button from "../Button/Button";
import "./SignLogin.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function SignLogin() {
  const [isActive, setIsActive] = useState("");
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const regLink = () => {
    setIsActive("active");
  };

  const logLink = () => {
    setIsActive("");
  };

  async function handleLogin(event) {
    event.preventDefault();

    const form = event.target;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    

    const username = data.username;
    const password = data.password;

    console.log("Email:", email);
    console.log("Username:", username);

    const url = "http://localhost:8800/api/auth/login";

    

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!res.ok) {
        console.error("login failed");
        return;
      }

      const result = await res.json();
      console.log("Login successful", result);

      Cookies.set("access_token",result.token,{expires: 1 });
     
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  async function handleSignUp(event) {
    event.preventDefault();

    const form = event.target;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    const email = data.email;
    const username = data.username;
    const password = data.password;

    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);

    const url = "http://localhost:8800/api/auth/register";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
        }),
      });

      if (!res.ok) {
        return console.error("Error");
      }

      console.log("Works");

      const result = await res.json();
      // setToken(result)
    } catch (error) {
      console.error("ovo je error : ", error);
    }
  }

  return (
    <div className={`signLogin-wrapper ${isActive ? "active" : ""}`}>
      <div className="signLogin-container">
        <form id="loginForm" autoComplete="off" onSubmit={(event) => handleLogin(event)}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="username" id="username" name="username" placeholder="Username" />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <RiLockPasswordFill className="icon" />
          </div>
          <div className="rememberForgot">
            <label>
              <input type="checkbox" id="checkbox" name="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>
          <div className="signlogin-button">
            <button className="login-button" type="submit">
              Login
            </button>
          </div>
          <div className="haveAcc">
            <p>
              Dont have account?{" "}
              <a href="#" onClick={regLink}>
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="signLogin-container-register">
        <form id="registerForm" onSubmit={(event) => handleSignUp(event)}>
          <h1>Registration</h1>
          <div className="input-box">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" id="email" name="email" placeholder="Email" />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <RiLockPasswordFill className="icon" />
          </div>
          <div className="rememberForgot">
            <label>
              <input type="checkbox" id="checkbox" name="checkbox" /> I agree to
              the terms and conditions
            </label>
          </div>
          <div className="signlogin-button">
            <button className="login-button" type="submit">
              Registration
            </button>
          </div>
          <div className="haveAcc">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={logLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
