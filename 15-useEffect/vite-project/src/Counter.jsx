import { useState, useEffect, use } from "react";

export default function Counter(){
    let [counterx, setCounterx] = useState(0);
    let [countery, setCountery] = useState(0);
    console.log("rendered");

    let incCountx = ()=>{
        setCounterx(prev=>(prev+1));
    }
    let incCounty = ()=>{
        setCountery(prev=>(prev+1));
    }

    useEffect(()=>{
        console.log("use effect for counterx")
    }, [counterx]) //will execute everytime counterx is set.

    useEffect(()=>{
        console.log("use effect for countey")
    }, [countery]) //will execute everytime countery is set.

    useEffect(()=>{
        console.log("use effect for counterx and countery")
    }, [counterx, countery]) //will execute everytime both counterx and countery are set.

    useEffect(()=>{
        console.log("i execute everytime you render")
    }) //will execute everytime both counterx and countery are set.

    useEffect(()=>{
        console.log("i executefor first time render only")
    },[]) //will execute everytime both counterx and countery are set.




    return (<>
    <div>countx: {counterx}</div> <br />
    <button onClick={incCountx}>Click</button><br /> <br /><br />
    <div>countx: {countery}</div> <br />
    <button onClick={incCounty}>Click</button>
    
    
    
    </>)
}