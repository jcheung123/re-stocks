import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css'
import {AiOutlineStock} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {MdLogout} from 'react-icons/md'
import {MdLogin} from 'react-icons/md'
import {DiReact} from 'react-icons/di'



function MenuBar(props) {
    
    let nav = props.user ?
    <div className="d-flex" id="wrapper">
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Re-Stocks <AiOutlineStock /><DiReact/></div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to='/'><AiOutlineHome/> Home</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to='/portfolio'><AiOutlineBook/> Portfolios</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/" onClick={props.handleLogout}><MdLogout/> Logout</Link>
                <h2>Welcome, {props.user.name}</h2>
            </div>
        </div>
    </div>
    :
        <div className="d-flex" id="wrapper">
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Re-Stocks <AiOutlineStock /> <DiReact/></div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to='/'><AiOutlineHome/> Home</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to='/portfolio'><AiOutlineBook/> Portfolios</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/login"><MdLogin/> Login</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/signup">Sign Up</Link>
            </div>
        </div>
    </div>
    return (
        <div className='NavBar'>
            {nav}
        </div>

    );
  }

export default MenuBar