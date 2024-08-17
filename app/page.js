'use client'
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler= (e)=>{
  e.preventDefault()
  setMainTask([...mainTask, { task,desc }]);
settask("");
setdesc("");
console.log(mainTask)
  };
  const deleteHandler = (i) =>{
    let copyTask =[ ...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
    
  }
  let renderTask =<h2 className='text-2xl font-semibold'>No task Available</h2>;
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i) => {
      return(
      <li key={i} className='flex items-center justify-between' >
        <div className='flex justify-between  mb-5 w-2/3'>
        <h5 className='text-2xl font-medium'>{t.task}</h5>
        <h6 className='text-lg font-mediun'>{t.desc}</h6>
        <button onClick={() =>{
          deleteHandler(i)
        }}
         className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </div>
      </li>);
    })
    
  }

  return (
   <>
<h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Iram Todo List</h1>
<form onSubmit={submitHandler}> 
<input type="text" className=' text-2xl border-zinc-800  border-4 m-5 px-4 py-2'
placeholder='Enter task here' 
value={task}
onChange={(e)=>
  settask(e.target.value)
}/>
<input type="text" className=' text-2xl border-zinc-800  border-4 m-5 px-4 py-2'
placeholder='Enter description here' 
value={desc}
onChange={(e)=>
  setdesc(e.target.value)
}/>
<button className='bg-black text-2xl text-white  p-5 px-4 py-2 font-bold rounded m-5 '>Add task</button>
</form>
<hr/>
<div className='bg-blue-500 my-4 mx-5'>
  <ul>{renderTask}</ul>
</div>
   </>
  )
}

export default page