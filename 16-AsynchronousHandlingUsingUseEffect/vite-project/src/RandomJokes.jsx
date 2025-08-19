import { useEffect, useState } from "react";


export default function RandomJokes(){
    let URL = "https://official-joke-api.appspot.com/random_joke";

    // let [joke, setJoke] = useState({setup:"", punchLine:""});
    //  //because of this initialization, we couldn't see a joke the first time we load the page. Also not that we cannot make a similar function like getJoke which can return a joke after fetching, because even though we use await still it will return a promise and nothing gotta print on the screen, even though the joke was fetched and can be printed to the console window. Thus we use useEffect.

    let [joke, setJoke] = useState({});

    // useEffect(async()=>{
    //     let response = await fetch(URL);
    //     let jsonResp =await response.json();
    //     setJoke({setup: jsonResp.setup, punchLine: jsonResp.punchline});
    // },[]) //square brackets becuase we would want this to execute just the first time., also you would have to wrap the setup function into another callback and then call the setup function in that call back. somthing like:

    useEffect(()=>{
        async function firstJoke(){
            let response = await fetch(URL);
            let jsonResp =await response.json();
            console.log("fist joke generated under use Effect")
            setJoke({setup: jsonResp.setup, punchLine: jsonResp.punchline});
        }
        firstJoke();
    },[])
     
    let getJoke = async()=>{
        let response = await fetch(URL);
        let jsonResp =await response.json();
        console.log(jsonResp);
        setJoke({setup: jsonResp.setup, punchLine: jsonResp.punchline});
    }
    return(<>

    <h1>Random Joke</h1>
    <p className="joke">
        {joke.setup} <br />
        {joke.punchLine}
    </p>
    <button onClick={getJoke}>Get New Joke</button>
    </>)
}