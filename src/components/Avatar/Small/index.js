import "./index.css"
import React from "react"

export const Small = ({ showbadge = true, background }) => {

    return (
        <div className="small">
            <img
                className="small"
                src={background}
                alt="small"
            ></img>
            {showbadge && <div className="badge"></div>}
        </div>
    )
}