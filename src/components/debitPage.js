import React from "react";
import NavBar from "./navBar.js";
import './debitPage.css'

const debitPage = () => {
    return(
        <div className="debitPage">
            <NavBar />
            <h2 className="userHeading">This is the debit page</h2>
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

export default debitPage;