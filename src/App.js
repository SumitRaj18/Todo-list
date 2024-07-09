import './App.css';
import Navbar from './Components/Navbar';
import { Todos } from './Components/Todos';
import { useEffect, useState } from 'react';
import AddTodo from './Components/AddTodo';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null) {
    initTodo=[];
  }
  else {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    setTodo(todos.filter((e)=>{
     return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  const addTodo=(title,desc)=>{
    const mytodo ={
      title:title,
      desc:desc
    }
    setTodo([...todos,mytodo])
   
   

  }
  const [todos, setTodo] = useState(initTodo)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));

  },[todos])

  return (
    <>
     <Navbar heading="Todolist" />
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete} />
     </>
  );
}

export default App;
