import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

function DashBoard() {
  let navigate = useNavigate();

  let activeLink = (a) => {
    if (a.isActive == true) {
      return { color: "rgb(255, 0, 119)", backgroundColor: "azure" };
    }
  };

  let store = useSelector((store) => {
    return store;
  });

  useEffect(() => {
    if (store && store.loginDetails && store.loginDetails.email) {
    } else {
      navigate("/");
    }
  });

  return (
    <div className="app">
      <nav>
        <NavLink
          style={(a) => {
            return activeLink(a);
          }}
          className="link1"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={(a) => {
            return activeLink(a);
          }}
          className="link1"
          to="/dsu"
        >
          Daily Status Update
        </NavLink>
        <NavLink
          style={(a) => {
            return activeLink(a);
          }}
          className="link1"
          to="/task"
        >
          Task
        </NavLink>
        <NavLink
          style={(a) => {
            return activeLink(a);
          }}
          className="link1"
          to="/messages"
        >
          Messages
        </NavLink>
        <NavLink
          style={(a) => {
            return activeLink(a);
          }}
          className="link1"
          to="/more"
        >
          More
        </NavLink>
        <NavLink
          style={(a) => {
            return activeLink(a);
          }}
          className="link1"
          to="/"
          onClick={() => {
            localStorage.clear();
          }}
        >
          Logout{" "}
        </NavLink>
      </nav>
    </div>
  );
}

export default DashBoard;
