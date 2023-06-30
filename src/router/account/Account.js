import React, { useState } from "react";
import "./Account.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {BsFacebook,BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'



function Account() {
  const navigete =useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPasssword] = useState("")

 const handleLogin = (e) =>{
  e.preventDefault()
  let newUser = {username, password}
  console.log(newUser);
  if (username === "tillo1" && password === "933014720") {
    localStorage.setItem("user", JSON.stringify(newUser))
    toast.success("login in")
    navigete("/admin/create-product")
  }else{
    toast.error("username or password is increment")
  }
 }

  return (
    <div className="container account">
    <form onSubmit={handleLogin} className="account__container">
    <div className="nnn">
    <button><BsFacebook/>Продолжить через Facebook</button>
    <button><BsApple/>Продолжить через Apple</button>
    <button><FcGoogle/>Продолжить через Google</button>
    </div>
    <h2>Войти  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Зарегистрироваться</h2>
    <hr />
    <div className="account__input">
      <input value={username} onChange={e=> setUsername(e.target.value)} type="text" name="" id="" placeholder="username" />
    </div>
    <div className="account__input">
      <input value={password} onChange={e=> setPasssword(e.target.value)} type="password" name="" id="" placeholder="Password" />
    </div>
    <Link href="#" className="account__link">
    Забыли пароль?
    </Link>
    <button className="account__button">Войти</button>
    <br />
    <p>При входе вы соглашаетесь с нашими Условия использования.</p>

    
  </form>
    </div>
  );
}

export default Account;
