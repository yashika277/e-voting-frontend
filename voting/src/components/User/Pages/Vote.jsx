import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_VOTE_PROGRESS,
  POST_VOTE_PROGRESS,
} from "../../../redux-saga/User/Vote/VoteAction";
import Swal from "sweetalert2";
import { GET_CONNECT_PROGRESS } from "../../../redux-saga/Admin/Connect/connectAction";
import Cookies from "js-cookie";

function Vote() {
  const [vote, setvote] = useState({
    
  });
  const [ChakeVote, setChakeVote] = useState(false);

  const userId = Cookies.get("_id");
  console.log(userId);
  const CARDNUMBER = Cookies.get("cardNo");

  const dispatch = useDispatch();
  const Connect = useSelector((state) => state.ConnectReducer);
  const Vote = useSelector((state) => state.VoteReducer);

  const GetVoteList = async () => {
    const auth = [];
    const VoteData = Vote.data;

    VoteData.map((val, ind) => {
      return auth.push(val.Auth.CardNumber);
    });
    if (auth.includes(CARDNUMBER)) {
      setChakeVote(true);
    } else {
      setChakeVote(false);
    }
    console.log(ChakeVote);
    console.log(auth);
  };

  useEffect(() => {
    dispatch({ type: GET_CONNECT_PROGRESS });
    dispatch({ type: GET_VOTE_PROGRESS });
    GetVoteList();
  }, []);

  const fetchData = (index) => {
    let data = {
      Auth: userId,
      Party: Connect.data[index].Party._id,
      // Election: Connect.data[index].Election._id,
    };
    console.log(data);
    setvote({ ...vote, ...data });
  };

  console.log(vote);
  const submitVote = () => {
    if (vote == null) {
      Swal.fire({
        title: "Please Select a Particular Party !",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Sure",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = "/login";
        }
      });
    } else {
      Swal.fire({
        title: "Your Vote Is Successfully Submitted !",
        text: "You have submitted a vote ?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Thank You For Voting",
        cancelButtonText: "No, cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({ type: POST_VOTE_PROGRESS, payload: vote });
          handleConformClick();
        }
      });
    }
  };

  const handleConformClick = () => {
    Cookies.remove("role");
    Cookies.remove("name");
    Cookies.remove("_id");
    Cookies.remove("cardNo");
    window.location = "/";
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="p-4">
            <section className="charts mt-4">
              <div className="row">
                <div className="container">
                  <table
                    className="table table-hover"
                    style={{ boxShadow: "0px 3px 20px -15px" }}
                  >
                    <thead>
                      <tr>
                        {/* <th scope="col">ElectionName</th>
                        <th scope="col">RegisterDate</th> */}
                        <th scope="col">Party Name</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Short Code</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Connect.data?.map((val, ind) => (
                        <tr key={ind}>
                          {/* <td>{val.Election.ElectionName}</td>
                          <td>
                            {new Date(
                              val.Election.RegisterDate
                            ).toLocaleDateString("en-US")}
                          </td> */}
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
                            <input
                              type="radio"
                              name="party"
                              onChange={() => fetchData(ind)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <button onClick={submitVote} className="button">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vote;
