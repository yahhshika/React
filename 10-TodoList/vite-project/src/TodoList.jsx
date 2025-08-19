import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){

    let[todos, setTodos] = useState([{work:"sample", id:uuidv4(), isDone: false}]);
    let[task, setTask] = useState("");

    let updateTask = (e)=>{
        // console.log(e.target.value);
        setTask(e.target.value);
    }

    let updateTodo = ()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {work: task, id:uuidv4()}];
        });
        setTask("");
    }

    let deleteTodos= (uniqueId)=>{
        setTodos(prevTodos=>{
            return prevTodos.filter(prevtodo=>{ return prevtodo.id != uniqueId})
        }) ;
    }

    let uppercaseAll = ()=>{
        // setTodos((prevTodos)=>{
        //    return prevTodos.map((todo)=>{
        //         return {...todo, work: todo.work.toUpperCase()};
        //     })
        // }) ///works
        setTodos((prevTodos)=>
           prevTodos.map((todo)=>{
                return {...todo, work: todo.work.toUpperCase()};
            })
        ) //works
    }

    let uppercaseOne = (key)=>{
        setTodos(prevTodos=>{
            return prevTodos.map(todo=>{
                if(todo.id == key){
                    return {...todo, work: todo.work.toUpperCase()};
                }else{
                    return todo;
                }
            })
        })
    }

    let markAsDone = (id)=>{
        setTodos(prevTodos=>{
            return prevTodos.map(todo=>{
                if(todo.id == id){
                    return {...todo, isDone:true};
                }else{
                    return todo;
                }
            })
        })
    }
    // let x = (z)=>z+1;
    // console.log(x(7));
    return (<>
    <h1>TODO LIST</h1>

    <input type="text" onChange={updateTask} value={task} placeholder="Enter a todo"/> <br />
    <button onClick={updateTodo}>Sumbit</button>


    <br /><br /><br />
    <h3>to do's:</h3>
    <ul>
        {todos.map(e=>(
 
            <li key={e.id}>
                <span style={{textDecoration: e.isDone? "line-through":"none"}}>{e.work}</span> &nbsp; &nbsp; &nbsp;
                <button onClick={()=>{deleteTodos(e.id)}}>Delete</button>
                <button onClick={()=>{uppercaseOne(e.id)}}>Upper Case it</button>
                <button onClick={()=>{markAsDone(e.id)}}>Mark As Done</button>
            </li>


        ))}
    </ul>
    <button onClick={uppercaseAll}>UpperCaseAll</button>

    </>)
}