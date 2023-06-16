import React from "react";
import "./Empty.css";
import { Link } from "react-router-dom";

function Empty({ title }) {
  return (
    <div className="empty__container">
     <img src="http://localhost:3000/static/media/hearts.bbeb9aa7c7332bb1cfd2.webp" alt="" />
      <h3>{title}da hozircha mahsulot yo'q</h3>
      <p>
        Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv
        orqali toping
      </p>
      <Link to={"/"}>Bosh sahifa</Link>
    </div>
  );
}

export default Empty;
