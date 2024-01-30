import React, { useState } from 'react'
import { Button } from '../Button'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count +1);
    const decrement = () => setCount(count -1);

    return (
        <div>
            <p>Counter: {count}</p>
            <Button onClick={increment} label="Incrementer" />
            <Button onClick={decrement} label="Decrementer" />
        </div>
    )
}