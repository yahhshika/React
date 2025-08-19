import { useState } from "react"

export default function Lottery(){
    let [lottery, setLottery] = useState({number: null, message: "Lottery"});
 
    let newTicket = ()=>{
        let num = Math.floor(Math.random()*1000);
        let localnum = num;
        let sum = 0;
        while(localnum != 0){
            sum += localnum%10;
            localnum = Math.floor(localnum/10);
        }
        // console.log("num "+num);
        // console.log("sum "+sum);
        setLottery(
            sum === 15? {number: num, message:"Lottery, Congratulation You Won"} : {number:num, message: "Lottery"}
        )

    }

    return (<>
    <h1>{lottery.message}</h1>
    <p>your number: {!lottery.number?"Click below to start":lottery.number}</p>
    <button onClick={newTicket}>Get new Ticket</button>
    
    
    
    
    </>)
}