import { Link } from "react-router-dom";
import "../admin.css";
import Cookies from "js-cookie";

function Sidebar() {
  return (
    <>
      <aside
        className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left"
        id="show-side-navigation1"
      >
        <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
          <img
            className="rounded-pill img-fluid"
            width="65"
            src={Cookies.get("Profile")}
            l
            alt=""
          />
          <div className="ms-2">
            <h5 className="fs-6 mb-0">
              <Link className="text-decoration-none" href="#">
                {Cookies.get("Name")}
              </Link>
            </h5>
          </div>
        </div>

        {/* <div className="search position-relative text-center px-4 py-3 mt-2">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Search here"
          />
        </div> */}

        <ul className="categories list-unstyled">
          <li className="has-dropdown">
            <Link to={"/AHome"} class="nav-link">
              {" "}
              Dashboard
            </Link>
          </li>
          <li className="">
            <Link to={"/Election"} class="nav-link">
              Election
            </Link>
          </li>
          <li className="has-dropdown">
            <Link to={"/Party"} class="nav-link">
              Party
            </Link>
          </li>
          <li className="has-dropdown">
            <Link to={"/PartyConnection"} class="nav-link">
              Party Connection
            </Link>
          </li>
          <li className="has-dropdown">
            <Link to={"/User"} class="nav-link">
              User
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
