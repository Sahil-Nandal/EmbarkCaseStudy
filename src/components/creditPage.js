import React from "react";
import NavBar from "./navBar.js";
import './creditPage.css';

const creditPage = () => {
    return(
        <div className="creditPage">
            <NavBar />
            <h2 className="userHeading"> This is the credit page</h2>
            <br></br>
            Enter Bank Account Number:
            <input placeholder="Acc Number"></input>
            <br></br>
            Enter the Amount:
            <input placeholder="Amount"></input>
            <br></br>
            <br></br>
            <button id="btn" className="linkBtn">Submit</button>

        </div>
    )
}

export default creditPage;