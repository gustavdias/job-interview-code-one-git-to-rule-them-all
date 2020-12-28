//Beginner React.js Coding Interview (ft. Clément Mihailescu)


import React from 'react'
const {useState} = React;
function LiveCodeIQ(){
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1> Hello Code</h1>
            <h2>Start clicking!!!</h2>
            <p>
{counter}

            </p>
            <button onClick={()=>{
                setCounter(counter + 1);
            }}>Increase Counter</button>
        </div>
    )
}

export default LiveCodeIQ

