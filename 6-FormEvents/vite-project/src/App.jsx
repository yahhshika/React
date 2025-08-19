
import './App.css'

function onSubmitHandler(event){
  event.preventDefault();
  console.log("form was submitted !") // if you do not do preventDefault() for the event object then this will be printed for a second the page will get refreshed and printed thing will be cleared from console window.
}

function App() {

  return (
    <>
     <form action=""  onSubmit={onSubmitHandler}>
      <input type="text" name="" id="" placeholder="Write Somthing" />
      <button>Submit</button>
     </form>
    </>
  )
}

export default App;
