import React from "react";
import Sidebar from "./Sidebar";
// import Card from "./Card";
import Navbar from "./Navbar";
import Banner from "./Banner";

function AHome() {
  return (
    <div>
      <Sidebar />
      <div id="wrapper">
        <Navbar />
        <div className="p-4">
          <Banner />
          <section className="charts mt-4">
            <div className="row">
              <div className="col-lg-6">{/* <Card /> */}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AHome;
