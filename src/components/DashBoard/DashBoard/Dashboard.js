import React from 'react';
import Book from '../../Customer/Book/Book';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid row">
           <div className="col-md-3">
           <SideBar></SideBar>
           </div>
           <div className="col-md-9">
<Book></Book>
           </div>
            </div>
           
        </section>
    );
};

export default Dashboard;