import React from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <>
      <div className="vh-100 bg-success bg-opacity-25 d-flex align-items-center justify-content-center">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
    </>
  );
}
