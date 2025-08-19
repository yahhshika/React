import TokenNum from "./TokenNum";
import "./Ticket.css";
export default function Ticket({nums}){
    return (<div className="ticket">
        <p>ticket</p>

        {nums.map((num, idx)=>(
            <TokenNum num={num} key={idx}/>
        ))}
    </div>)
}