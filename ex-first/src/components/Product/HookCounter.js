import { useState } from "react";

const HookCounter = () => {
    const [count , setCount] = useState(0);
    const Hookcounterone =() =>{
        setCount((prevcount) => prevcount + 1);
    };
    const Hookcountertwo =() =>{
        setCount((prevcount) => prevcount + 2);
    };
    const Hookcounterfive =() =>{
        for(let i=0 ; i<5 ;i++){
            console.log(count);
                setCount( (prevcount) => prevcount + 1);
        }
    };
    return ( 
        <div>
            <h2>Count -{count} </h2>
            <button onClick={Hookcounterone}> Add One </button> 
            <button onClick={Hookcountertwo}> Add two </button> 
            <button onClick={Hookcounterfive}> Add five </button> 

        </div>
     );
};
 
export default HookCounter;