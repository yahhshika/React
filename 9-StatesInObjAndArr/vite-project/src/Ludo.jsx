import { useState } from "react"

export default function Ludo(){

    let [clicks, setClick] = useState({blue:0,green:0,red:0,yellow:0});
    let [history, setHistory] = useState("no moves");

    let updateBlue = ()=>{
        setClick((prevClicks)=>{

            return({...clicks, blue: prevClicks.blue+1 });
        })
        setHistory((prevHistory)=>{
            return([...prevHistory, " blue"])
        })
    }
    let updateGreen = ()=>{
        setClick((prevClicks)=>{
            
            return({...clicks, green: prevClicks.green+1 });
        })
        setHistory((prevHistory)=>{
            return([...prevHistory, " green"])
        })
    }
    let updateRed = ()=>{
        setClick((prevClicks)=>{
            
            return({...clicks, red: prevClicks.red+1 });
        })
        setHistory((prevHistory)=>{
            return([...prevHistory, " red"])
        })
    }
    let updateYellow = ()=>{
        setClick((prevClicks)=>{
            
            return({...clicks, yellow: prevClicks.yellow+1 });
        })
        setHistory((prevHistory)=>{
            return([...prevHistory, " yellow"])
        })
    }
    return (
        <>
        <p>Game Begins</p>
        <p>Hostory : {history}</p>
        <div>
            <p>Blue</p>
            <button onClick={updateBlue} style={{backgroundColor:"blue"}}>Blue: {clicks.blue} </button>
        </div>
        <div>
            <p>Green</p>
            <button onClick={updateGreen} style={{backgroundColor: "green"}}>Green: {clicks.green}</button>
        </div>
        <div>
            <p>Red</p>
            <button onClick={updateRed} style={{backgroundColor:"Red"}}>Red: {clicks.red} </button>
        </div>
        <div>
            <p>Yellow</p>
            <button onClick={updateYellow} style={{backgroundColor:"Yellow", color:"black"}}>Yellow:{clicks.yellow} </button>
        </div>
        </>
    )
}