import React from "react";
import L from "../styles/Layout.module.scss";
import s from "../styles/Main.module.scss";

const Main = () => {
  return (
    <div className={L.flex}>
      <div>
        <img className={s.main__img} src="myPic.jpeg"></img>
      </div>
      <div className={s.main__right}>
        <h1>WEB DEVELOPER</h1>
        <h3>
          This is another place that is being developed. <br />
          Create stories and have fun working on them
        </h3>
      </div>
    </div>
  );
};

export default Main;
