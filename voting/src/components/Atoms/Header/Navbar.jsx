import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const Navbar = ({ data }) => {
  console.log(data, "data");
  const MySwal = withReactContent(Swal);

   const handleLogOut = () => {
     MySwal.fire({
       title: "Are you sure?",
       text: "You will be logged out!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonText: "Yes, logout!",
       cancelButtonText: "No, cancel",
     }).then((result) => {
       if (result.isConfirmed) {
         Cookies.remove("Role");
         Cookies.remove("Name");
         Cookies.remove("_id");
         Cookies.remove("Profile");
         window.location = "/";
       }
     });
   };
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="70"
              height="70"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ background: "black", borderRadius: "10px" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {data?.map((val, ind) => {
                return (
                  <li className="nav-item active" key={ind}>
                    <Link to={val.path} className="nav-link">
                      {val.name}
                    </Link>
                  </li>
                );
              })}
              <li className="nav-item">
                <a className="nav-link ms-5" href="#" tabindex="-1" aria-disabled="true">
                  <img
                    className="rounded-circle img-fluid m-2"
                    width="35"
                    src={Cookies.get("Profile")}
                    alt="Profile"
                  />
                  {Cookies.get("Name")}
                </a>
              </li>
              <button className="btn btn-dark ms-5" onClick={handleLogOut}>
                Logout
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
