import { useState, useEffect } from "react"
import "../App.css"

const Counter = ()=>{
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        if (counter > 9){
            alert("No stock")
        }
    }, [counter])

    const sum = ()=>{
        setCounter(counter + 1)
    };

    const rest = ()=>{
        if (counter > 0){
            setCounter(counter - 1)
        }
    };

    return(
        <div className="counter">
            <button onClick={sum}>+</button>
            <div>{counter}</div>
            
            <button onClick={rest}>-</button>
        </div>
    )
};

export default Counter;