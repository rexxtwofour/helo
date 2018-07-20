import React from 'react';
import { Link } from 'react-router-dom';



export default function Nav () {


    return(
            <div>
        <div className="navigation">Nav</div>
        <button className="home">Home</button>
        <button className="newpost">New Post</button>
        <button className="logout">Logout</button>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/form">Form</Link>
        <Link to="/nav">Nav</Link>
        <Link to="/post">Post</Link>


        </div>

            )

}