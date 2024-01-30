import "./index.css"
import React from "react"
import Button from "../../Button"

export const Cover = ({ showedit = true, background }) => {

    return (
        <div className="cover">
            <img
                className="cover"
                src={background}
                alt="cover"
            ></img>
            {showedit && 
            <div className="edit">
                <Button.Primary label="edit"/>
            </div>}
        </div>
    )
}