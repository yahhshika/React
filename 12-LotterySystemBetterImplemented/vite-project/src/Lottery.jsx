import { useState } from "react"
import "./Lottery.css";
import { generateTicket, sum } from "./GenrateTicket";

export default function Lottery(){
    let [ticket, setTicket] = useState(generateTicket(3));
    let isWinning = sum(ticket)===15;
    let buyNewTicket = ()=>{
        setTicket(generateTicket(3));
    }
    return<>
    <h1>Lottery Game</h1>
    <div className="tickets">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
    </div> <br /> <br />
    <button onClick={buyNewTicket}>Generate new Ticket</button>
    {isWinning && <h1>Congraulations, You Won !!</h1>}
    </>
}