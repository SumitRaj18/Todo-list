import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
 
    const[title,setTitle]=useState('')
    const[desc,setDesc]=useState('')
  const submit=((e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be blank");
    }
    else{
    addTodo(title,desc);
    setTitle("");
    setDesc("");
    }
   
  })
  return (
    <div className='container mt-3'>
     <form >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Add Title</label>
    <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Add Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
</form> 
    </div>
  )
}

export default AddTodo
