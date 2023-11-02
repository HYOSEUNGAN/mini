import React from "react";
import s from "../styles/Header.module.scss";
import L from "../styles/Layout.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={L.flex}>
      <div className={s.header}>
        <a href="/" className={`${s.logo} ${s.a__custome}`}>
          DEV Learn
        </a>
      </div>
      <div className={s.padding_1rm}>
        <a href="/blog" className={s.a__custome}>
          Web3
        </a>
        <a href="/blog" className={s.a__custome}>
          Blog
        </a>
        <button className={s.login_btn}>Login</button>
      </div>
    </div>
  );
};

export default Header;
