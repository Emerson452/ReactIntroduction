import React from 'react';
import "./index.css"

export const Card = ({ label, icon, iconPosition, background }) => {

    return (
        <div className="containerCard">
            <img
                className="card"
                src={background}
                alt="card">
            </img>
<div className="container">
            {iconPosition === 'left' && <img className="icon" src={icon} alt='github'/>}
            <p>{label}</p>
            {iconPosition === 'right' && <span className="icon"><img className="icon" src={icon} alt='github'/></span>}
            </div>
        </div>
    )
}