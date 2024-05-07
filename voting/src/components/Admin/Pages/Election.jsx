import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../admin.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_ELECTION_PROGRESS,
  GET_ELECTION_PROGRESS,
  POST_ELECTION_PROGRESS,
  UPDATE_ELECTION_PROGRESS,
} from "../../../redux-saga/Admin/Election/ElectionAction";
import Swal from "sweetalert2";

function Election() {
  const name = useRef();
  const date = useRef();
  const [view, setView] = useState({});
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(true);

  const Election = useSelector((state) => state.ElectionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ELECTION_PROGRESS });
  }, []);

  const handleAddElection = () => {
    const data = {
      ElectionName: name.current.value,
      RegisterDate: date.current.value,
    };

    dispatch({
      type: POST_ELECTION_PROGRESS,
      payload: data,
    });

    Swal.fire({
      title: "Election Added",
      text: "Election added successfully",
      icon: "success",
    });

    name.current.value = "";
    date.current.value = "";
    setView({});
  };

  const handleDeleteElection = (val) => {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
    dispatch({
      type: DELETE_ELECTION_PROGRESS,
      payload: val,
    });
  };

  const handleViewElection = (val) => {
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
    setView((prevView) => ({
      ...prevView,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateElection = () => {
    const updatedView = {
      ...view,
    };

    dispatch({
      type: UPDATE_ELECTION_PROGRESS,
      payload: updatedView,
    });

    Swal.fire({
      title: "Election Updated",
      text: "Election updated successfully",
      icon: "success",
    });

    // Clear input fields and close modal
    setView({});
    setViewModalVisible(false);
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
                        {isAdding ? "Create" : "Update"} E-Election
                      </h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div className="modal-body">
                      <form>
                        E-Election Name:
                        <br />
                        <input
                          className="mb-3 fild"
                          type="text"
                          id="name"
                          name="ElectionName"
                          ref={name}
                          onChange={handleInputChange}
                          value={view.ElectionName}
                          style={{ width: "100%" }}
                        />
                        <br />
                        RegisterDate :
                        <br />
                        <input
                          className="mb-3 fild"
                          type="date"
                          id="logo"
                          name="RegisterDate"
                          ref={date}
                          onChange={handleInputChange}
                          value={view.RegisterDate}
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
                          onClick={handleAddElection}
                          data-bs-dismiss="modal"
                        />
                      ) : (
                        <input
                          type="submit"
                          className="vote m-2"
                          value="Update"
                          onClick={handleUpdateElection}
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
                      <th scope="col">ElectionName</th>
                      <th scope="col">RegisterDate (mm/dd/yyyy)</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Election.data?.map((val, ind) => (
                      <tr key={ind}>
                        <td>{val.ElectionName}</td>
                        <td>
                          {new Date(val.RegisterDate).toLocaleDateString(
                            "en-US"
                          )}
                        </td>

                        <td>
                          <button
                            className="btn btn-dark"
                            style={{ margin: "0px", marginRight: "15px" }}
                            onClick={() => handleDeleteElection(val)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-dark"
                            style={{ margin: "0px" }}
                            onClick={() => handleViewElection(val)}
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

export default Election;
