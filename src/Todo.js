import React from 'react'
import { ACTION } from './App'
import "./App.css"
export default function Todo({todo,dispatch}) {
  return (
    <div className='todo'>      
        <input type='checkbox' onClick={()=>{dispatch({type:ACTION.TOGGLE_TODO,payload:{id:todo.id}})}} value={todo.name}></input>
        <h1 style={todo.complete?{textDecoration:"line-through"}:{color:"black"}}>{todo.name}</h1>
        <button type='button' onClick={()=>{dispatch({type:ACTION.DELETE_TODO,payload:{id:todo.id}})}}>DELETE</button>
    </div>
  )
}
