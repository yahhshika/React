import { useState } from "react";

function ToggleLike(){

    let [isLiked, setisLiked] = useState(false);

    let styles = {color: "red", fontSize: "5rem"};

    let onclickP = ()=>{
        console.log("p is clicked")
        setisLiked(!isLiked);
        // console.log(isLiked); //will show older value
    }


    return (
        <>
        <p onClick={onclickP}>
            {isLiked? <i className="fa-solid fa-heart" style={styles}></i> : <i className="fa-regular fa-heart" style={styles}></i>}
            
        </p>
        
        
        </>
    )
}

export default ToggleLike;