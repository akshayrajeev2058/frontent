import React, { useState } from "react";
import { axioinstamce } from "./Login";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ApplyLeave() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  const [formData, setFormData] = useState({
    reason: "",
    startdate: "",
    enddate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData, "565565");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axioinstamce.post(`/api/leave/${userId}`, formData);
      console.log(res, "]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]");
      navigate("/leavamanagement");
    } catch (error) {
      console.log("error");
    }
  };

  function handleLogout() {
    navigate("/");
    
  }
  

  return (
    <div
      id="login-popup"
      tabIndex="-1"
      className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-red-600 bg-transparent hover:bg-red-600 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
            onClick={handleLogout}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 bg-red-600"
              fill="#c6c7c7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close popup</span>
          </button>

          <div className="p-5">
            <h3 className="text-2xl mb-0.5 font-medium">Apply for Leave</h3>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <label htmlFor="reason" className="sr-only">
                Reason
              </label>
              <input
                name="reason"
                type="text"
                required
                onChange={handleChange}
                value={formData.reason}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Reason"
              />

              <label htmlFor="startdate" className="sr-only">
                Start Date
              </label>
              <input
                name="startdate"
                type="date"
                required
                onChange={handleChange}
                value={formData.startdate}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Start Date"
              />

              <label htmlFor="enddate" className="sr-only">
                End Date
              </label>
              <input
                name="enddate"
                type="date"
                required
                onChange={handleChange}
                value={formData.enddate}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="End Date"
              />

              <button
                type="submit"
                className="block w-full bg-black text-white rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyLeave;
