
import React, { useState } from 'react'
import TodosForm from '../components/todos/TodosForm'
import Todos from '../components//todos/Todos'

// const initialData =[
//   {id : 1 , title : "محمد راضي", done : true }
//   ,{id :2 , title : "محمود عاطف" , done :false},
//   {id:3 , title : "مصطفى راضي" , done : true}
// ]

const initialData = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [] 

const TodoList = () => {
  const [todos,setTodos] = useState(initialData)
  //modes add , filter ,edit
  const [mode , setMode] = useState('add')
  const [activeTodo , setActiveTodo]=useState(null)
  
  const setToLocal = ()=>{
    localStorage.setItem('todos', JSON.stringify(todos)  )
  }

  const toggleTodo = (id)=>{
    const newData =todos.map (td=>{
      if (td.id===id){
        td.done =!td.done
      }
      return td
    })
    setTodos(newData)
    
  }
  

  const deleteTodo = (id)=>{
    const newData =todos.filter (td=>{
      if (td.id===id){
       return td.id !==id   
      }
      return td
      
    })
    setTodos(newData)
    
  }
  

  const addNewTodo =(title)=>{
    if (mode!=='edit'){
    const newTodo ={
      id : new Date().getTime(),
      title ,
      done : false
    }
    setTodos((data)=>{
      return[
        newTodo , ...data
      ] 
    })
    
  
  }else if (mode === 'edit'){
      const newTodos = todos.map((td)=>{
        if (td.id === activeTodo.id){
        td.title = title
        }
        return td

      })
      setTodos(newTodos)
  
      setMode('add')
    }
  }

  const toglleFilter =()=>{

    if (mode === 'edit'){
      return
    }

    if(mode ==='add'){setMode('filter')}
    else{setMode('add')}
  
    
  }
  const editTodo =(todo)=>{
    setMode('edit')
    
  setActiveTodo(todo)
  }
  
  let currentTodos =[...todos]
  if (mode ==='filter') {
  currentTodos=todos.filter((td)=>{return !td.done})
  }
  if (mode ==='edit'&&activeTodo){
    currentTodos =[activeTodo]
  }
  
  setToLocal()

  return (
    <main>
    <div className='container'>
        <div className='todos'>
            <TodosForm mode={mode}
             addNewTodo={addNewTodo} 
             toglleFilter={toglleFilter}
              activeTodo={activeTodo}
              />
            <Todos
            mode={mode}
             todos={currentTodos}
              toggleTodo={toggleTodo}
               deleteTodo={deleteTodo}
               editTodo ={editTodo}
               />
        </div>
    </div>
    </main>
  )
}

export default TodoList
