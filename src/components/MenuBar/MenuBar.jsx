import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css'


function MenuBar() {
    return (
        <div className="d-flex" id="wrapper">
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">React Stocks</div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to='/'>Home</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to='/portfolio'>Portfolios</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/login">Login/Signout</Link>
                </div>
            </div>
        </div>
    );
  }

export default MenuBar