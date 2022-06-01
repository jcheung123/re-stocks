import React from 'react';
import {DiReact} from 'react-icons/di'
import {AiOutlineStock} from 'react-icons/ai'

function Heading() {
    return (
        <div>
            <h1 className="mt-4" style={{color: "white"}}><AiOutlineStock /> Welcome to Re-Stocks <DiReact/></h1>
            <h3 style={{color: "white"}}> A Stocks Portfolio App made with React</h3>
            <br /><br />
            <h4 style={{color: "white"}}> Create your Custom Portfolio Now!</h4>
            <br /><br /><br />
        </div>
    );
  }

export default Heading