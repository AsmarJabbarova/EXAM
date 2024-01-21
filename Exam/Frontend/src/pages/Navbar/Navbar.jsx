import React from 'react'
import './Navbar.scss'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="mainNav">
            <div className="title">
                <h1>EATWELL
                </h1>
            </div>
            <div className="list">
                <Link to={"/"}><div className="home">Home</div></Link>
                <Link to={"add"}><div className="add">Add</div></Link>
                <div className="basket">Basket</div>
            </div>

        </div>
    )
}

export default Navbar