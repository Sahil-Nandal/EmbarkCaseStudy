import React from "react";
import NavBar from "./navBar.js";
import './userPage.css';
const userPage = () =>{
    return(
        <div className="userPage">
            <NavBar />
            <h2 className="userHeading">This is the user page.</h2>
            <br></br>
            Username: xyz@123
            <br></br>
            <br></br>
            Bank Details-
            <br></br>

            Bank Account Number: xxxxxxxxxx
            <br></br>

            Balance: xxxxxxx
        </div>
    )
}

export default userPage;