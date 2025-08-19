import { useState } from "react"
import "./DisplayComments.css"
import CommentForm from "./CommentForm";

export default function DisplayComments(){
    let [allComments, setComments] = useState([{
        username:"@yahhshika",
        rating: 5,
        review:"Good"
    }]);
    let addNewComment = (comment)=>{
        setComments(prevCom =>(
            [...prevCom, comment]
        ))
    }
    return <div className="commentsDisplay">
        <h2>All Comments</h2>
        {allComments.map((comment, idx)=>{
            return <div className="commentDiv" key={idx}>
                <p>{comment.review}</p>
                <p>{comment.rating}</p>
                <p>- {comment.username}</p>
            </div>
        } )}
        <CommentForm addNewComment={addNewComment}/>
    </div>
}