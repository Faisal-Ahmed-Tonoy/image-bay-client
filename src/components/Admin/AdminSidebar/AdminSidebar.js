import React from 'react';
import { faCrown, faPlus, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AddServices from '../AddServices/AddServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminSidebar = () => {
    
    return (
        <div>
         <Link to='/addServices'> <FontAwesomeIcon icon={faShoppingBag} className="mr-2"/>AddServices </Link>
        </div>
    );
};

export default AdminSidebar;