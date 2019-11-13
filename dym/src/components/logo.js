import React from 'react'
import DYMlogo from '../images/DYMlogo.jpg'

const LogoComponent = () => {
    return (
        <div>
            <img src={DYMlogo} alt="logo" className="logo"/>
        </div>
    );
}

export default LogoComponent
