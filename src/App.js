import { useReducer, useState } from "react";
import Todo from "./Todo";
import "./App.css"
export const ACTION={
    ADD_TODO:'add',
    TOGGLE_TODO:"toggle",
    DELETE_TODO:"delete"
}

function App() {
    function reducer(todos,action){
        switch(action.type){
            case ACTION.ADD_TODO:
                return [...todos,newtodo(action.payload.name)]
            case ACTION.TOGGLE_TODO:
                return todos.map(
                    (todo)=>{
                        if(todo.id===action.payload.id){
                            return {...todo,complete:!todo.complete}
                        }
                        return todo;
                    }
                )
            case ACTION.DELETE_TODO:
                return todos.filter(todo=>todo.id!==action.payload.id);
            default:
                return todos;
        }
        }
    function newtodo(name){
        return {id:Date.now(),name:name,complete:false}
    }
       
    function handleSubmit(e){
        e.preventDefault();
        dispatch({type:ACTION.ADD_TODO,payload:{name:name}});
        setName('');
       
    }
  
    const [todos,dispatch]=useReducer(reducer,[])
    const [name,setName]=useState('');

    return ( 
      <div>
         <div className="input_area" >
           <form onSubmit={handleSubmit}>          
          <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
          <button onClick={handleSubmit}>ADD</button>          
        </form>          
        </div>
        <div className="card_data">   
        {
        todos.map(todo=>{
            return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        })
        }
       </div>
       </div>
     );
 }



export default App;