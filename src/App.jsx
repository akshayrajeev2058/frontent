import Login from "./Login"
import {  BrowserRouter ,  Routes,  Route}   from 'react-router-dom'; 
import Signup from "./Signup"; 
import Leavemangement from "./Leavemangement";
import Applyleave from "./Applyleave";
import Adminlogin from "./Adminlogin";
import AdminDashboard from "./AdminDashboard";
import Userlist from "./Userlist";
import Pending from "./Pending";
import Approved from "./Approved";
import Rejected from "./Rejected";

export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/leavamanagement' element={<Leavemangement/>}></Route>
    <Route path='/applyleave'element={<Applyleave/>}></Route>
    <Route path='/adminlogin'element={<Adminlogin/>}></Route>
    <Route path='/admindashboard'element={<AdminDashboard/>}></Route>
    <Route path='/userlist'element={<Userlist/>}></Route>
    <Route path='/pending'element={<Pending/>}></Route>
    <Route path='/approved'element={<Approved/>}></Route>
    <Route path='/rejected'element={<Rejected/>}></Route>



   </Routes>
   </BrowserRouter>
   </>
  )
}