import React, { useRef } from "react";
import logo from "./User/image/logo.png";
import side from "./User/image/side.png";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const UserLogin = () => {
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
        const id = res.data.data.Role;
        console.log(id);
        Cookies.set("Role", id);
        Cookies.set("_id", res.data.data._id);
        Cookies.set("Name", res.data.data.Name);
        Cookies.set("CardNo", res.data.data.CardNumber);
        Cookies.set("Profile", res.data.data.Profile);

        Swal.fire({
          title: "Login Succsessfuly!",
          text: "You clicked the button!",
          icon: "success",
        });
        window.location = "/home";
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
            window.location = "/login";
          }
        });
      });
  };

  return (
    <div className="container">
      <div className="row user-login">
        <div className="col-lg-6 col-sm-12]">
          <img src={side} className="w-100" alt="login-image" />
        </div>
        <div className="col-lg-6 col-sm-12 login-form d-flex align-items-center justify-content-center">
          <div className="form">
            <center>
              <div className="mb-3 formlogo">
                <img src={logo} alt="logo" />
              </div>
            </center>
            <h3 className="text-center">User Login</h3>
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
                ref={password}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button className="vote" onClick={handleLogin}>
              LogIn
            </button>
            <Link className="vote" to={"/admin"}>
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
