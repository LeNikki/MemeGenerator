import React from 'react'
import Troll from "./assets/troll.png"

function Header(){
    return(
        
        <nav className="header-bar">
           
            <img className ="troll" src= {Troll} alt= "troll face"/>
            <p className='brand-name'>Nicole's Meme Generator</p>
           <p className='proj-3'>React Course Project 3</p>
        </nav>
    )
}
export default Header