import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Navbar() {

  const navigate=useNavigate()

  function handleLogout() {
    
    navigate('/')
    
  }
  
  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <span className=" mx-24 h-10 text-white text-lg font-sans">
                Leave Management
              </span>
            </div>
          </div>
          
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                className="text-black bg-white hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
