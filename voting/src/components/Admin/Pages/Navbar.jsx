import React from 'react'
import { Link } from 'react-router-dom';
import "../admin.css";
import logo from '../image/logo.png'
import Cookies from 'js-cookie';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

function Navbar() {
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
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-md"
        style={{
          boxShadow: "-12px 2px 20px -13px",
          backgroundColor: "#1A257E",
          height: "115px"
        }}
      >
        <div className="container-fluid mx-2">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#toggle-navbar"
              aria-controls="toggle-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="uil-bars text-white"></i>
            </button>
            <Link className="navbar-brand">
              <img
                src={logo}
                alt="Logo"
                width="70"
                height="70"
                className="d-inline-block align-text-top"
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="toggle-navbar">
            <ul className="navbar-nav ms-auto">
              <li class="nav-item">
                <button className="btn btn-dark" onClick={handleLogOut}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar