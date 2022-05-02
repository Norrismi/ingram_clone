import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header-container'>
            <div className="header-btns">
                <div id='btn'>Shop</div>
                <div id='btn'>Cloud</div>
                <div id='btn'>Commerce \& Lifecycle</div>
                <div id='btn'>IoT</div>
            </div>


            <div className='header-location'>
                <div id='btn'>
                    Country:
                </div>
                <div id='btn'>
                    United States
                </div>
            </div>
        </div>
    )
}

export default Header