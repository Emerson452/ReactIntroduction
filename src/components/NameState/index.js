import React, { useState } from 'react'
import Button from '../Button'

export const NameState = () => {
    const [defaultt, setDefault] = useState("Base");

    const name = () => setDefault("pierre");
    const surname = () => setDefault("roger");

    return (
        <div>
            <p>Name State: {defaultt}</p>
            <Button.Primary onClick={name} label="Name" />
            <Button.Primary onClick={surname} label="Surname" />
        </div>
    )
}