import React from "react";
import logo from "../image/logo.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const redirectToVotePage = () => {
  };

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="background">
            <div className="row">
              <div className="col-12">
                <div className="banner-content">
                  <img
                    src={logo}
                    alt="Logo"
                    width="100"
                    height="100"
                    className="logo d-inline-block align-text-top"
                  />
                  <h1>Wel-come to E-Election</h1>
                  <p>
                    "Digital ballots, secure servers, voter authentication,
                    transparency, and accessibility—e-elections empower
                    democracy, ensuring fair, efficient, and inclusive electoral
                    processes."
                  </p>
                  <button
                    className="vote"
                    onClick={() => redirectToVotePage(navigate("/vote") )}
                  >
                    Enter vote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
