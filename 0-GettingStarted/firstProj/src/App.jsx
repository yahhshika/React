import './App.css'
import Title from './Title' 
import ProductGrp from './ProductGroup';
// function Title(){
//   return <h1>I am the title</h1>;  //to run this function or to initialize use can write <Title></Title> or you can directly write <Title/>
// }

function Desc(){
  return <div>This is a div</div>;
}

function App() {


  // return <button>click</button>;  // we can return just one component at a time. 
  // return (
  //   <div>
  //     <p>Heading</p>
  //     <Title/>
  //     <Title/>
  //     <Title/>
  //     <Title/>
  //     <Title/>
  //     <Desc/>
  //   </div>
  // )  instead of adding an extra div to the root element you can use react fragment
  let name = "Yashika";
  return <>
    <p>Heading</p>
    <Title/>
    <Title/>
    <Title/>
    <Title/>
    <Title/>
    <Desc/>
    <p>2*2 = {2*2}</p> 
    <p>name: {name.toUpperCase()}</p>

    <ProductGrp/>

  </> //use curly braces to produce java script code

  
}

export default App


// BASIC RULES OF WRITING CODE IN REACT
// RETURN A SINGLE ROOT ELEMENT
// CLOSE ALL THE TAGS
// camelCase MOST OF THE THINGS


// styles for product.jsx should be given in product.css, styles for xyz.jsx should be given in xyz.css, it can be done in the same file but by convention and for modularity we divide it.