import { useState } from "react";
import { useFormik } from 'formik'; //npm i formik - for form validations
import "./CommentForm.css"


export default function CommentForm({addNewComment}){
    // let[comment, setComment] = useState({username:"", rating:5, review:""});

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username is required';
        } 
        return errors; 
    };

    const formik = useFormik({
        initialValues: {
            username:"",
            rating:5,
            review:""
        },
        validate,
        onSubmit: values => {
            addNewComment(values 
                // ,{ resetForm }
            );
            alert(JSON.stringify(values, null, 2));
            // resetForm({
            //     values: {
            //         username: "",
            //         rating: 5,
            //         review: ""
            //     }
            // }); try resetting later on, rn i am moving on
        },
    });
    // console.log("Rendered")

    //COMMENTING OUT THESE AS FORMIK HAS IT'S OWN PREDEFINED METHODS FOR THIS.
    // let handleOnchange = (event)=>{
    //     // console.log(event.target.value);
    //     setComment(prevCom=>{
    //         return {...prevCom, [event.target.name]:event.target.value};
    //     })
    // }

    // let onSubmitHandler = (event)=>{
    //     addNewComment(comment);
    //     setComment({
    //         username:"",
    //         rating:5,
    //         review:"",
    //     })
    //     event.preventDefault();
    // }

    return (<form className="commentForm" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label> &nbsp;
        <input type="text" value={formik.values.username} name="username" id="username" placeholder="@username" onChange={formik.handleChange}/>
        {formik.errors.username ? <div style={{color: "red"}}>{formik.errors.username}</div> : null}
        <br /> <br /> <br />

        <label htmlFor="review">Review</label> &nbsp;
        <input type="text" value={formik.values.review} name="review" id="review" placeholder="Add a review" onChange={formik.handleChange}/>
        <br /> <br /> <br />

        <label htmlFor="rating">Rating</label> &nbsp;
        <input type="number" value={formik.values.rating} name="rating" id="username" placeholder="Enter Rating" onChange={formik.handleChange} min="1" max="5"/>
        <br /> <br /> <br />

        <button type="submit">Submit</button>
    </form>)
}