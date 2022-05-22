import React from 'react';
import './MenuBar.css'


function MenuBar() {
    return (
        <div className="d-flex" id="wrapper">

            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">React Stocks</div>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Home</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Create New Portfolio</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Login/Signout</a>
                </div>
            </div>
        </div>
    );
  }

export default MenuBar