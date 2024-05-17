import React, { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai'; // Import the edit icon
import Adminnavbar from './Adminnavbar';
import { axioinstamce } from './Login';

function Pending() {
  const [alldata, setAlldata] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [previousChoice, setPreviousChoice] = useState('');
  const [previousItemId, setPreviousItemId] = useState(null);

  const fetchAllData = async () => {
    try {
      const res = await axioinstamce.get(`/api/alldata/`);
      if (res.status === 200) {
        setAlldata(res.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleEditIconClick = (itemId, choice) => {
    setSelectedItemId(itemId);
    setSelectedChoice(choice);
    setShowDropdown(true);
  };

  const handleSaveButtonClick = async (itemId, choice) => {
    console.log(itemId,choice,'**********************')
    try {
      const res = await axioinstamce.patch(`/api/updatestatus/`, { id: itemId, choice });
      if (res.status === 200) {
        setShowDropdown(false);
        fetchAllData();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };

  const handleCloseButtonClick = () => {
    setShowDropdown(false);
    setSelectedChoice(previousChoice);
    setSelectedItemId(previousItemId);
  };

  const pendingData = alldata.filter(data => data.choice === 'Pending');

  return (
    <>
      <Adminnavbar />
      <section className="relative py-2 bg-blueGray-50">
        <div className="w-full mb-12 px-2">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-pink-900 text-white">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-lg text-white">User status</h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">User ID</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Username</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Reason</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Start Date</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">End Date</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Choice</th>
                  </tr>
                </thead>

                <tbody>
                  {pendingData.map((data) => (
                    <tr key={data.id}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <span className="ml-3 font-bold text-black">{data.user.id}</span>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.user.username}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.reason}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.startdate}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.enddate}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center relative">
                          {showDropdown && selectedItemId === data.id && (
                            <div className="absolute top-0 right-0 mt-2 bg-black border rounded-md shadow-md z-10">
                              <ul className="py-1">
                                {['Pending', 'Approved', 'Rejected'].map(choice => (
                                  <li
                                    key={choice}
                                    className={`cursor-pointer px-4 py-2 hover:bg-gray-800 ${selectedChoice === choice ? 'bg-black' : ''}`}
                                    onClick={() => setSelectedChoice(choice)}
                                  >
                                    {choice}
                                  </li>
                                ))}
                              </ul>
                              <div className="flex justify-end">
                                <button
                                  className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                  onClick={() => handleSaveButtonClick(selectedItemId, selectedChoice)}
                                >
                                  Save
                                </button>
                                <button
                                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                  onClick={handleCloseButtonClick}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          )}
                          <span className="mr-2 text-black">{selectedItemId === data.id ? selectedChoice : data.choice}</span>
                          <AiOutlineEdit
                            className="text-black cursor-pointer"
                            size={30}
                            onClick={() => handleEditIconClick(data.id, data.choice)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pending;
