import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function Leavemangement() {
  const baseurl = "http://127.0.0.1:8000";

  const axioinstance = axios.create({
    baseURL: baseurl,
  });
  const [alldata, setAlldaata] = useState([]);

  const Alldata = async () => {
    try {
      const res = await axioinstance.get(`/api/alldata/`);
      if (res.status === 200) {
        setAlldaata(res.data);
        console.log(res.data, "56565656565");
      } else {
        console.log("error");
      }
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    Alldata();
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-5 mt-2 bg-blueGray-50 border-2 rounded-lg border-black  bg-gray-800">
        <div className="w-full  mb-12 xl:mb-0 px-2 mx-auto ">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3  text-2xl	text-black font-bold tracking-wider text-left  border-b border-white">
                    User Number
                  </th>
                  <th className="px-6 py-3 text-2xl	text-black font-bold tracking-wider text-left border-b border-white">
                    Username
                  </th>
                  <th className="px-6 py-3 text-2xl text-black	font-bold tracking-wider text-left border-b border-white">
                    Start-Date
                  </th>
                  <th className="px-6 py-3 text-2xl text-black	font-bold tracking-wider text-left border-b border-white">
                    End-Date
                  </th>
                  <th className="px-6 py-3 text-2xl	 text-black font-bold tracking-wider text-left border-b border-white">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {alldata.map((data) => (
                  <tr key={data.id} className="border-b border-green-800">
                    <td className="px-6 py-4 text-sm font-medium  text-white h-3 whitespace-nowrap">
                      {data.user.id}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium   text-white  whitespace-nowrap">
                      {data.user.username}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium  text-white  whitespace-nowrap">
                      {data.startdate}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium  text-white whitespace-nowrap">
                      {data.enddate}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                        data.choice === "Pending"
                          ? "text-yellow-500"
                          : data.choice === "Approved"
                          ? "text-green-500"
                          : data.choice === "Rejected"
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {data.choice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leavemangement;
