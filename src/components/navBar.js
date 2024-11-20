import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css'

const navBar = () => {
    return(
        <div className="navbar">
            <Link to="/userPage"><button id="btn" className="linkBtn">Home</button></Link>
            <Link to="/creditPage"><button id="btn" className="linkBtn">Credit</button></Link>
            <Link to="/debitPage"><button id="btn" className="linkBtn">Debit</button></Link>
            <Link to="/transferPage"><button id="btn" className="linkBtn">Transfer</button></Link>
        </div>
    )
}

export default navBar;