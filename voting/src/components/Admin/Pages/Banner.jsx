import React from "react";
import "../admin.css";
import Cookies from "js-cookie";

function Banner() {
  return (
    <div className="p-4">
      <div className="welcome">
        <div className="content rounded-3 p-3">
          <h1 className="fs-3">Welcome to Dashboard</h1>
          <p className="mb-0">
            {Cookies.get("Name")}, welcome to your awesome dashboard!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
