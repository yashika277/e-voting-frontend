import logo from "./User/image/logo.png";
import side from "./User/image/side.png";
// import "./User/User-tool/User.css";
// import "./User/User-tool/userResponsive.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ADMIN_LOGIN, BASE_URL } from "../redux-saga/constant";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AdminLogin = () => {
   const MySwal = withReactContent(Swal);

   const email = useRef();
   const password = useRef();

   const handleLogin = () => {
     const data = {
       Email: email.current.value,
       Password: password.current.value,
     };

     console.log(data);
     axios
       .post("https://voater-backend-app.onrender.com/v1/login", data)
       .then((res) => {
         console.log(data);
         Cookies.set("Role", res.data.data.Role);
         Cookies.set("_id", res.data.data._id);
         Cookies.set("Name", res.data.data.Name);
         Cookies.set("Profile", res.data.data.Profile);
         Swal.fire({
           title: "Login Succsessfuly!",
           text: "You clicked the button!",
           icon: "success",
         });
         window.location = "/";
       })
       .catch((error) => {
         console.log(error);
         MySwal.fire({
           title: "Your Information Is Not Valid !",
           icon: "info",
           showCancelButton: false,
           confirmButtonText: "OK",
         }).then((result) => {
           if (result.isConfirmed) {
             window.location = "/";
           }
         });
       });
   };

  return (
    <>
      <div className="container">
        <div className="row user-login">
          <div className="col-lg-6 col-sm-12">
            <img src={side} className="w-100" alt="side-image" />
          </div>
          <div className="col-lg-6 col-sm-12 login-form d-flex align-items-center justify-content-center">
            <div className="form">
              <center>
                <div className="mb-3 mt-3 formlogo">
                  <img src={logo} alt="logo" />
                </div>
              </center>
              <h3 className="text-center">Admin Login</h3>
              <div className="form-group">
                <label>email</label>
                <input
                  type="text"
                  ref={email}
                  className="form-control"
                  placeholder="Enter Your Email Id"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  ref={password}
                />
              </div>
              <button className="vote" onClick={handleLogin}>
                Login
              </button>
              <Link className="vote" to={"/"}>
                User Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
