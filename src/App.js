import React, { createContext, useState } from 'react'; 
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Book from './components/Customer/Book/Book';
import Dashboard from './components/DashBoard/DashBoard/Dashboard';
import Admin from './components/Admin/Admin/Admin';
import AddServices from './components/Admin/AddServices/AddServices';
import BookingList from './components/Customer/BookingList/BookingList';
import Review from './components/Customer/Review/Review';
import AdminServiceList from './components/Admin/AddminServiceList/AdminServiceList';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './components/Admin/ManageService/ManageService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
 
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   
    <Router>
      <Switch>
       <Route exact path="/">
         <Home></Home> 
        </Route>
        <Route  path="/login">
             <Login></Login>
            </Route>
        <PrivateRoute path="/service/:_id">
          <Book></Book>
        </PrivateRoute>
        <PrivateRoute path="/admin/addService">
           < AddServices></AddServices>
        </PrivateRoute>
        <PrivateRoute path="/admin/adminServiceList">
           <AdminServiceList></AdminServiceList>
        </PrivateRoute>
      
        <PrivateRoute path="/admin/makeAdmin">
           <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/admin/manageService">
           <ManageService></ManageService>
        </PrivateRoute>
      
        
        <PrivateRoute path="/bookingList">
     <BookingList></BookingList>
        </PrivateRoute>
        <PrivateRoute path="/review">
     <Review></Review>
        </PrivateRoute>
     
        
      </Switch>
    </Router>
    </UserContext.Provider>
      );
}

export default App;
