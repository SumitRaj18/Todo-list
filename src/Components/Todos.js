import React from 'react'
import {TodoItem} from './TodoItem'

export const  Todos=(props)=> {
 
  return (
    <>
    <h1 className='mt-3 mb-3 text-center'> My Todos</h1>
    <div className="container  mt-5 d-flex justify-content-around " >
      
      
      {props.todos.length===0 ? "No todos to display":
      props.todos.map((todo)=>{
         return <div className="d">
         <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
         </div>
      })

      }
       </div>
       </>
  )
}
