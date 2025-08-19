import TokenNum from './TokenNum'
import Ticket from './Ticket';
import LotteryGame from './LotteryGame';
import { sum } from './TicketFunctions';
import './App.css'

function App() {
  
  let winningCondition = (ticket)=>{
    return sum(ticket) === 15;
  }

  return (
    <>
    <LotteryGame n={3} winningCondition={winningCondition}/>
    </>
  )
}

export default App;
