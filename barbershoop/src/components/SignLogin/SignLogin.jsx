import { useState } from "react";
import Button from "../Button/Button";
import "./SignLogin.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
export default function SignLogin() {

    const [isActive,setIsActive]=useState('');

    const regLink=()=>{
        setIsActive('active');
    }

    const logLink=()=>{
        setIsActive('');
    }


    function handleSubmit(event){
        event.preventDefault();

        const form = event.target;
        const fd=new FormData(event.target);
        const data=Object.fromEntries(fd.entries());

        if(data.username.length<4 || data.username.length>25){
            alert("Username bust be between 4 and 25 characters");
            return;
        }
        if(data.passwordreg.length<8 || data.passwordreg.length>20){
            alert("Password bust be between 8 and 20 characters");
            return;
        }


        console.log(data);


        form.reset();
    }
  return (
    <div className={`signLogin-wrapper ${isActive ? "active" : ""}`}>
        <div className="signLogin-container">
            <form  onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="email" id="emaillog" name="emaillog" placeholder="Email" />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" id="passwordlog" name="password" placeholder="Password" />
                    <RiLockPasswordFill className="icon"/>
                </div>
                <div className="rememberForgot">
                    <label><input type="checkbox" id="checkbox" name="checkbox"/>Remember me</label>
                    <a href="#">Forgot password</a>
                </div>
                <div className="signlogin-button">
                    <button className="login-button" type="submit">Login</button>
                
                </div>
                <div className="haveAcc">
                    <p>Dont have account? <a href="#" onClick={regLink}>Sign up</a></p> 
                </div>
            </form>
        </div>


        <div className="signLogin-container-register">
            <form onSubmit={handleSubmit}>
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text"id="username" name="username" placeholder="Username" />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="email" id="emailreg" name="emailreg"placeholder="Email" />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password"id="passwordreg" name="passwordreg" placeholder="Password" />
                    <RiLockPasswordFill className="icon"/>
                </div>
                <div className="rememberForgot">
                    <label><input type="checkbox" id="checkboxreg" name="checkboxreg"/>  I agree to the terms and conditions</label>
                    
                </div>
                <div className="signlogin-button">
                <button className="login-button" type="submit">Registration</button>
                </div>
                <div className="haveAcc">
                    <p>Already have an account? <a href="#"  onClick={logLink}>Login</a></p> 
                </div>
            </form>
        </div>
    </div>
  );    
}
