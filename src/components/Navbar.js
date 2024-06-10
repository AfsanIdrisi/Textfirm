import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
export default function Navbar({alertComp,changeMode, currentMode,user}) {
    function enableDarkMode(){
        changeMode({
            backgroundColor:"black",
            color:"white"
        })
        document.body.style.backgroundColor="black";
        }
        
    function enableLightMode(){
        changeMode({
            backgroundColor:"white",
            color:"black"
        })
        document.body.style.backgroundColor="white";

    }

    function enableSkyMode(){
        changeMode({
            backgroundColor:"skyblue",
            color:"white"
        })
        document.body.style.backgroundColor="skyblue";
    }
    function enableNatureMode(){
        changeMode({
            backgroundColor:"lightgreen",
            color:"brown"
        })
        document.body.style.backgroundColor="lightgreen";
    }
    let buttonStyle={
        color:currentMode.backgroundColor,
        backgroundColor:currentMode.color
    }
    return (
        <>
            <div id="navbar" style={currentMode}>
                <div>
                    <li><a style={currentMode} href="/">TextForm</a></li>
                    {/* <li><a style={currentMode} href="/about">About Us</a></li>
                    <li><a style={currentMode} href="/contact">Contact Us</a></li> */}
                    {/* <li><Link style={currentMode} to="/">Shop</Link></li> */}
                </div>
                <div>
                    <button className='btn' id='darkModeBtn' onClick={enableDarkMode} style={buttonStyle}>Dark</button>
                    <button className='btn' id='lightModeBtn' onClick={enableLightMode} style={buttonStyle}>Light</button>
                    <button className='btn' id='skyModeBtn' onClick={enableSkyMode} style={buttonStyle}>Sky</button>
                    <button className='btn' id='natureModeBtn' onClick={enableNatureMode} style={buttonStyle}>Nature</button>
                </div>
            </div>
            {alertComp}
            <div id="welcomeText">
                <h1 style={currentMode}>Welcome To Text Analyzer Mr {user}</h1>
            </div>
        </>
    )
}

Navbar.defaultProps = {
    user: "User"
}

Navbar.propTypes = {
    user: PropTypes.string
}