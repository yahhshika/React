import { useState } from "react";
import Ticket from "./Ticket";
import { generateArray, sum } from "./TicketFunctions";
import NewTicketBtn from "./NewTicketBtn";
import NewTicketGenerator from "./NewTicketGenerator";

export default function LotteryGame({n=3, winningCondition}){
    let [ticket, setTicket] = useState(generateArray(n));
    let haswon = winningCondition(ticket);

    let newTicket= ()=>{
        setTicket(generateArray(n));
    }
    
    return(<>
    <h1>LOTTERY</h1>
    <Ticket nums={ticket}/>
    {haswon && <h1>Congratulations, You Won !</h1>}
    <br /><br />
    <NewTicketBtn action={newTicket}/> <br /> <br />
{/* an experimentive button below */}
    <button onClick={()=>NewTicketGenerator(setTicket, n)}>click me</button>
    
        
    </>)
}