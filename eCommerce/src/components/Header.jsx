import React, { useState } from 'react'
import '../css/Header.css'
import { BsBasket } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function Header() {
    const [theme, setTheme] = useState(true);
    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff"
            root.style.color = "black";
        }
        setTheme(!theme);
    }
    return (
        <div className='div-space-between'>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo2.png"></img>
                <p className='logo-text'> E-Ticaret Sitesi</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type='text' placeholder='Ara'></input>
                <div>
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <MdOutlineLightMode className='icon' onClick={changeTheme} />}
                    <BsBasket className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Header