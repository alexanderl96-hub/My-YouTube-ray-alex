import React from 'react'
import { Link } from 'react-router-dom'
import "./Homabased.css"

export default function HomeBased() {
    return (
        <div className= "main">
            <img src='http://cdn.onlinewebfonts.com/svg/img_24879.png' className="App-logo" alt="logo" />
            <Link to="/home" className="portLink">
            <h1 className='portada'>
               Play Me
            </h1> 
            </Link>
        </div>
    )
}