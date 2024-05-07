import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../admin.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_PARTY_PROGRESS,
  GET_PARTY_PROGRESS,
  POST_PARTY_PROGRESS,
  UPDATE_PARTY_PROGRESS,
} from "../../../redux-saga/Admin/Party/PartyAction";
import Swal from "sweetalert2";

function Party() {
  const name = useRef();
  const logo = useRef();
  const code = useRef();
  const [view, setView] = useState({});
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(true);

  const Party = useSelector((state) => state.PartyReducer);
  const dispatch = useDispatch();
  // ....................../GET/....................

  useEffect(() => {
    dispatch({ type: GET_PARTY_PROGRESS });
  }, []);
  // ....................../INSERT/....................

  const handalSubmit = () => {
    const formData = new FormData();
    formData.append("pName", name.current.value);
    formData.append("shortCode", code.current.value);
    formData.append("Profile", logo.current.files[0]);
    console.log(formData);

    dispatch({
      type: POST_PARTY_PROGRESS,
      payload: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    Swal.fire({
      title: "Party Added",
      text: "Party added successfully",
      icon: "success",
    });
  };
  // ....................../DELETE/....................

  const handalDelete = (val) => {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
    dispatch({
      type: DELETE_PARTY_PROGRESS,
      payload: val,
    });
  };

  // ....................../UPDATE/....................
  const handleViewParty = (val) => {
    setView(val);
    setIsAdding(false);
    setViewModalVisible(true);
  };

  const handleInputChange = (e) => {
    setView((prevView) => ({
      ...prevView,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setView((prevView) => ({
      ...prevView,
      Profile: e.target.files[0],
    }));
  };

  const handleUpdateParty = () => {
    dispatch({
      type: UPDATE_PARTY_PROGRESS,
      payload: view,
    });

    Swal.fire({
      title: "Party Updated",
      text: "Party updated successfully",
      icon: "success",
    });
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
                className="button mb-5 "
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
                        {isAdding ? "Create" : "Update"} E-Election Party
                      </h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div className="modal-body">
                      <form>
                        E-Election Party Name:
                        <br />
                        <input
                          className="mb-3 fild"
                          type="text"
                          id="name"
                          name="pName"
                          ref={name}
                          onChange={handleInputChange}
                          value={view.pName}
                          style={{ width: "100%" }}
                        />
                        <br />
                        E-Election Party Logo:
                        <br />
                        <input
                          className="mb-3 fild"
                          type="file"
                          id="logo"
                          name="Profile"
                          ref={logo}
                          onChange={handleFileChange}
                          style={{ width: "100%" }}
                        />
                        <br />
                        E-Election Party Short Code:
                        <br />
                        <input
                          className="mb-3"
                          type="text"
                          id="code"
                          name="shortCode"
                          ref={code}
                          onChange={handleInputChange}
                          value={view.shortCode}
                          style={{ width: "100%" }}
                        />
                        <br />
                      </form>
                    </div>

                    <div className="modal-footer">
                      {isAdding ? (
                        <input
                          type="submit"
                          className="vote m-2"
                          value="Submit"
                          onClick={handalSubmit}
                          data-bs-dismiss="modal"
                        />
                      ) : (
                        <input
                          type="submit"
                          className="vote m-2"
                          value="Update"
                          onClick={handleUpdateParty}
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
                      <th scope="col">Party Name</th>
                      <th scope="col">Logo</th>
                      <th scope="col">Short Code</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Party.data?.map((val, ind) => (
                      <tr key={ind}>
                        <td>{val.pName}</td>
                        <td>
                          <img
                            src={val.Profile}
                            alt="party logo"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </td>
                        <td>{val.shortCode}</td>
                        <td>
                          <button
                            className="btn btn-dark"
                            style={{ margin: "0px", marginRight: "15px" }}
                            onClick={() => handalDelete(val)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-dark"
                            style={{ margin: "0px" }}
                            onClick={() => handleViewParty(val)}
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

export default Party;
