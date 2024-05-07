import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { GET_PARTY_PROGRESS } from "../../../redux-saga/Admin/Party/PartyAction";
import { GET_ELECTION_PROGRESS } from "../../../redux-saga/Admin/Election/ElectionAction";
import {
  DELETE_CONNECT_PROGRESS,
  GET_CONNECT_PROGRESS,
  POST_CONNECT_PROGRESS,
} from "../../../redux-saga/Admin/Connect/connectAction";
import Swal from "sweetalert2";

function Connection() {
  const [Data, setData] = useState({
    election: "",
    party: "",
  });

  const Party = useSelector((state) => state.PartyReducer);
  const Election = useSelector((state) => state.ElectionReducer);
  const Connect = useSelector((state) => state.ConnectReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_CONNECT_PROGRESS });
    dispatch({ type: GET_PARTY_PROGRESS });
    dispatch({ type: GET_ELECTION_PROGRESS });
  }, []);

  const inputHandel = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleConectParty = () => {
    if (Data.election && Data.party) {
      const payload = {
        Election: Data.election,
        Party: Data.party,
      };

      dispatch({ type: POST_CONNECT_PROGRESS, payload });

      Swal.fire({
        title: "Connected!",
        text: "Party connected successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please select both election and party",
        icon: "error",
      });
    }
  };

  const handalDelete = (val) => {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
    dispatch({
      type: DELETE_CONNECT_PROGRESS,
      payload: val,
    });
  };

  return (
    <>
      <div>
        <Sidebar />
        <div id="wrapper">
          <Navbar />
          <div className="p-4">
            <section className="charts mt-4">
              <div className="lshadow">
                <div className="partyadd">
                  <label className="form-label">Select E-Election</label>
                  <select
                    onChange={(e) => inputHandel(e)}
                    name="election"
                    className="form-select form-select-lg mb-2"
                    aria-label="Default select example"
                  >
                    <option value={""} selected>
                      Open this select menu
                    </option>
                    {Election.data?.map((item, index) => (
                      <option key={index} value={item._id}>
                        {item.ElectionName}
                      </option>
                    ))}
                  </select>

                  <label className="form-label">Select E-Election Party</label>
                  <select
                    onChange={(e) => inputHandel(e)}
                    name="party"
                    className="form-select form-select-lg mb-2"
                    aria-label="Default select example"
                  >
                    <option value={""} selected>
                      Open this select menu
                    </option>
                    {Party.data?.map((item, index) => (
                      <option key={index} value={item._id}>
                        {item.pName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="btn">
                  <button
                    type="button"
                    onClick={handleConectParty}
                    className="vote"
                  >
                    Connect Party
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="container">
                  <table
                    className="table table-hover"
                    style={{ boxShadow: "0px 3px 20px -15px" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">ElectionName</th>
                        <th scope="col">RegisterDate</th>
                        <th scope="col">Party Name</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Short Code</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Connect.data?.map((val, ind) => (
                        <tr key={ind}>
                          <td>{val.Election.ElectionName}</td>
                          <td>
                            {new Date(
                              val.Election.RegisterDate
                            ).toLocaleDateString("en-US")}
                          </td>
                          <td>{val.Party.pName}</td>
                          <td>
                            <img
                              src={val.Party.Profile}
                              alt="party logo"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </td>
                          <td>{val.Party.shortCode}</td>
                          <td>
                            <button
                              className="btn btn-dark"
                              style={{ margin: "0px", marginRight: "15px" }}
                              onClick={() => handalDelete(val)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connection;
