import "./Button.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Button({ style, name, to }) {
    return (
      <Link to={to}>
        <button className={style} type="button">
          {name}
        </button>
      </Link>
    );
  }
