import React, { useEffect, useState } from "react";
import "../admin.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_USER_PROGRESS,
  GET_USER_PROGRESS,
  POST_USER_PROGRESS,
  UPDATE_USER_PROGRESS,
} from "../../../redux-saga/Admin/User/UserAction";
import Swal from "sweetalert2";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function User() {
  const [img, setImg] = useState([]);
  const [view, setView] = useState({
    Name: "",
    CardNumber: "",
    Password: "",
    Sex: "Male",
    DOB: "",
    Phone: "",
    Email: "",
    Address: "",
  });

  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(true);

  const User = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_USER_PROGRESS });
  }, []);

  const handleAddUser = () => {
    const formData = new FormData();
    formData.append("Password", view.Password);
    formData.append("CardNumber", view.CardNumber);
    formData.append("Sex", view.Sex);
    formData.append("Name", view.Name);
    formData.append("DOB", view.DOB);
    formData.append("Address", view.Address);
    formData.append("Phone", view.Phone);
    formData.append("Email", view.Email);
    formData.append("Profile", img);

    dispatch({
      type: POST_USER_PROGRESS,
      payload: formData,
    });

    Swal.fire({
      title: "User Added",
      text: "User added successfully",
      icon: "success",
    });
  };

  const handalDelete = (val) => {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
    dispatch({
      type: DELETE_USER_PROGRESS,
      payload: val,
    });
  };

  const handleViewUser = (val) => {
    const formattedDate = val.RegisterDate
      ? new Date(val.RegisterDate).toISOString().split("T")[0]
      : "";
    setView({
      ...val,
      RegisterDate: formattedDate,
    });
    setIsAdding(false);
    setViewModalVisible(true);
  };

  const handleInputChange = (e) => {
    setView((view) => ({
      ...view,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleUpdateUser = () => {
    dispatch({
      type: UPDATE_USER_PROGRESS,
      payload: view,
    });

    Swal.fire({
      title: "User Updated",
      text: "User updated successfully",
      icon: "success",
    });
  };

  const handleGenderChange = (gender) => {
    setView((view) => ({
      ...view,
      Sex: gender,
    }));
  };

  return (
    <>
      <div>
        <Sidebar />
        <div id="wrapper">
          <Navbar />
          <div className="container p-4">
            <section className="charts mt-4">
              <button
                type="button"
                className="button mb-5"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                onClick={() => setIsAdding(true)}
              >
                Add +
              </button>

              <div
                className={`modal ${viewModalVisible ? "show" : ""}`}
                id="myModal"
                tabIndex="-1"
                role="dialog"
                style={{ display: viewModalVisible ? "block" : "none" }}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">
                        {isAdding ? "Create" : "Update"} User
                      </h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div className="modal-body">
                      <form encType="multipart/form-data">
                        User Name:
                        <br />
                        <input
                          className="mb-3 fild"
                          type="text"
                          id="name"
                          name="Name"
                          onChange={handleInputChange}
                          value={view.Name}
                          style={{ width: "100%" }}
                        />
                        <br />
                        Card Number:
                        <br />
                        <input
                          className="mb-3 fild"
                          type="text"
                          id="card"
                          name="CardNumber"
                          onChange={handleInputChange}
                          value={view.CardNumber}
                          style={{ width: "100%" }}
                        />
                        <br />
                        Password:
                        <br />
                        <input
                          className="mb-3 fild"
                          type="password"
                          id="password"
                          name="Password"
                          onChange={handleInputChange}
                          value={view.Password}
                          style={{ width: "100%" }}
                        />
                        <br />
                        Profile:
                        <br />
                        <input
                          className="mb-3 fild"
                          type="file"
                          id="profile"
                          name="Profile"
                          onChange={handleImageChange}
                          style={{ width: "100%" }}
                        />
                        <br />
                        Gender:
                        <label className="ms-2">Male:</label>
                        <input
                          className="mb-3 fild"
                          type="radio"
                          id="male"
                          name="Gender"
                          onChange={() => handleGenderChange("male")}
                          checked={view.Sex === "male"}
                          style={{ marginLeft: "5px" }}
                        />
                        <label className="ms-2">Female:</label>
                        <input
                          className="mb-3 fild"
                          type="radio"
                          id="female"
                          name="Gender"
                          onChange={() => handleGenderChange("female")}
                          checked={view.Sex === "female"}
                          style={{ marginLeft: "5px" }}
                        />
                        <br />
                        DOB:
                        <br />
                        <input
                          className="mb-3 fild"
                          type="date"
                          id="dob"
                          name="DOB"
                          onChange={handleInputChange}
                          value={view.DOB}
                          style={{ width: "100%" }}
                        />
                        <br />
                        Phone:
                        <br />
                        <input
                          className="mb-3 fild"
                          type="tel"
                          id="phone"
                          name="Phone"
                          onChange={handleInputChange}
                          value={view.Phone}
                          style={{ width: "100%" }}
                        />
                        <br />
                        Email:
                        <br />
                        <input
                          className="mb-3 fild"
                          type="email"
                          id="email"
                          name="Email"
                          onChange={handleInputChange}
                          value={view.Email}
                          style={{ width: "100%" }}
                        />
                        <br />
                        Address:
                        <textarea
                          className="mb-3 fild"
                          type="text"
                          id="address"
                          name="Address"
                          onChange={handleInputChange}
                          value={view.Address}
                          style={{ width: "100%" }}
                        ></textarea>
                      </form>
                    </div>

                    <div className="modal-footer">
                      {isAdding ? (
                        <input
                          type="submit"
                          className="vote m-2"
                          value="Submit"
                          onClick={handleAddUser}
                          data-bs-dismiss="modal"
                        />
                      ) : (
                        <input
                          type="submit"
                          className="vote m-2"
                          value="Update"
                          onClick={handleUpdateUser}
                          data-bs-dismiss="modal"
                        />
                      )}
                      <button
                        type="button"
                        className="vote m-0"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <table
                  className="table table-hover"
                  style={{ boxShadow: "0px 3px 20px -15px" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">User Name</th>
                      <th scope="col">Card Number</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Profile</th>
                      <th scope="col">DOB (mm/dd/yyyy)</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {User.data?.map((val, ind) => (
                      <tr key={ind}>
                        <td>{val.Name}</td>
                        <td>{val.CardNumber}</td>
                        <td>{val.Sex}</td>
                        <td>
                          <img
                            src={val.Profile}
                            alt="party logo"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                        </td>
                        <td>{new Date(val.DOB).toLocaleDateString("en-US")}</td>
                        <td>{val.Phone}</td>
                        <td>{val.Email}</td>
                        <td>{val.Address}</td>
                        <td>
                          <button
                            className="btn btn-dark"
                            style={{ margin: "0px" }}
                            onClick={() => handalDelete(val)}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-dark"
                            style={{ margin: "0px" }}
                            onClick={() => handleViewUser(val)}
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
