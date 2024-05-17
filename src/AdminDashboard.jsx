import React, { useState } from "react";
import Adminnavbar from "./Adminnavbar";
import { Link } from "react-router-dom";

import {
  FaUser,
  FaHourglass,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function AdminDashboard() {
  function handleLogout() {
    navigate("/");
  }
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="h-screen text-black "
      style={{
        backgroundImage: " red",
      }}
    >
      <Adminnavbar />
      <div className="grid grid-cols-2 gap-16 sm:grid-cols-2 mt-24 ml-36 ">
        <Link to="/userlist">
        <div
      className="relative overflow-hidden rounded-lg px-10 pb-12 pt-5 h-44 w-96 shadow sm:px-6 sm:pt-6"
      style={{
        borderRadius: "10px",
        border: "2px solid #333",
        background: hovered ? "pink" : "grey",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaUser className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xl">
        User
      </div>
    </div>
        </Link>
        <Link to="/pending">
        <div
      className="relative overflow-hidden rounded-lg px-10 pb-12 pt-5 shadow h-44 w-96 sm:px-6 sm:pt-6"
      style={{
        borderRadius: "10px",
        border: "2px solid #333",
        background: hovered ? "lightblue" : "grey",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaHourglass className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xl">
        Pending
      </div>
    </div>
        </Link>
        <Link to="/approved">
        <div
      className="relative overflow-hidden rounded-lg px-10 pb-12 pt-5 h-44 w-96 shadow sm:px-6 sm:pt-6"
      style={{
        borderRadius: "10px",
        border: "2px solid #333",
        background: hovered ? "green" : "grey",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaCheckCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xl">
        Approved
      </div>
    </div>
        </Link>
        <Link to="/rejected">
        <div className="relative overflow-hidden rounded-lg px-10 pb-12 pt-5 h-44 w-96 shadow sm:px-6 sm:pt-6"
         style={{
           borderRadius: "10px",
           border: "2px solid #333",
           background: hovered ? "red" : "grey",
         }}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
    >
      <FaTimesCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xl">
        Rejected
      </div>
    </div>
        </Link>{" "}
      </div>
    </div>
  );
}

export default AdminDashboard;
