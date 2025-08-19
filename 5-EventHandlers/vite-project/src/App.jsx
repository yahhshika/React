
import './App.css'

function onclick(){
  console.log("clicked")
}

function handleOnMouseOver(){
console.log("mouse over")
}

function handleDblClick(){
  console.log("dbl clicked")
}
function App() {


  return (
    <>
    <button onClick={onclick}>Click me</button>
    <p onMouseOver={handleOnMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque cumque neque. Fugiat, deleniti error! Veritatis molestias reiciendis facere explicabo, adipisci ullam? Magni doloribus nobis rem illum pariatur aspernatur optio.</p>
    <button onDoubleClick={handleDblClick}>Dbl click</button>
    </>
    
  )
}

export default App
