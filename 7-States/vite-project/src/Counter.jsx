import { useState } from "react";

function random(){
    return Math.random()*10;
}

export default function Counter(){
    console.log("component rerendered")
    // let [count, setCount] = useState(0);
    let [count, setCount] = useState(random); //do not pass the function like: random() otherwise it will be executed everytime we re-render the Counter() but it will make no difference in the vslue of count, else pass it as reference, react will execute it on it's own, not repeated execution overhead time will be taken.Thus pass random in place of random().
    //useState updates count using setCount. 
    
    function incCount(){ //after this fn executes, the whole Counter() is recalled (re rendered) on web page.
        // setCount(count+1); //this is an asynchronous fn, thus we can use call back in them 
        // setCount((prevCount)=>{
        //     return prevCount+1;
        // }) // count++
        // setCount((prevCount)=>{
        //     return prevCount+1;
        // }) // again count++, thus count+=2 ! as there are two calls for setCount.
        setCount(25); // if i do just this then after two clicks the component stopped to re-render as the count is updated with a constant value only, and react will detect that.
        console.log("inside incCount");
   
        // console.log(count); //here no updation of count will be found, after execution oF incCount and then of setCount() and then after re-rendering the Counter new count can be accessed, thus old value is found. 
    }
    return (<>
    <h3>Count: {count}</h3> 
    <button onClick={incCount}>Click</button>
    {/* you wont see in changes in h3 for count, it will remain 0 */}
    
    </>)

}