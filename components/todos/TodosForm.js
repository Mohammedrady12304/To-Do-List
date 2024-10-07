import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'



const TodosForm = ({addNewTodo , toglleFilter , mode , activeTodo}) => {
 
  const [title , setTitle]=useState('')
  const [editRender , setEditRender] = useState(false)

  if(mode==='edit'&&!editRender){
setTitle(activeTodo.title)
setEditRender(true)
  }

  const getInput =(e)=>{
    setTitle(e.target.value)
  }

const handleAddNewTodo =()=>{
  setEditRender(false)
  if (!title.trim()){

    return
  }
  addNewTodo(title)
  setTitle('')

}

  return (
    <div className='todos-form'>
        <div className={`todos-form_icon ${mode === 'filter' ? 'active' : ''}`} onClick={toglleFilter} >
     <FeatherIcon icon ='circle'/>
      </div>
      <div className='todos-form_form'>
        <input type='text' value={title} placeholder='اضف مهمة جديدة...' onChange={getInput}></input>
      </div>
      <div className='todos-form_submit' >
        <button className='btn' disabled={!title.trim()}  onClick={handleAddNewTodo} >{mode === 'edit' ? 'تعديل' : 'اضافة' }</button>
      </div>
    </div>
  )
}

export default TodosForm

