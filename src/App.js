import React from 'react';
import './App.css';
import {useState} from 'react'
    function App() {
      const [toDos,setToDos] = useState([])
      const [toDo,setToDo] =useState('')
      const day = new Date().toLocaleString("default",{weekday:"long"})
      return (
        <div className="app">
          <div className="mainHeading">
            <h1>ToDo List</h1>
          </div>
          <div className="subHeading">
            <br />
            <h2>Whoop, it's {day} 🌝 ☕ </h2>
          </div>
          <div className="input">
            <input value={toDo}  onChange={(event)=>setToDo(event.target.value)}type="text" placeholder="🖊️ Add item..." />
            <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
          </div>
          <div className="todos">
           {
            toDos.map((obj,index)=>{
              return (
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                console.log(e.target.checked)
                console.log(obj)
                setToDos(toDos.filter(obj2=>{
                  if(obj2.id === obj.id){
                    obj2.status = e.target.checked
                  }
                  return obj2
                }))
              }} 
                value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="left">
              {toDos.status ? <p id='completed'>completed</p> : null}
                 </div>
              <div className="right">
                <i  onClick={() => {
            setToDos([...toDos.slice(0, index), ...toDos.slice(index + 1)]);
              }} className="fas fa-times"></i>
              </div>
            </div>
              )
            })        
            }
             {/* {toDos.map((obj)=>{
                  if(obj.status){
                    return(<h1>{obj.text}</h1>)
                  }
                  return null
             })
            } */}
        
          </div>
        </div>
      );
    }
    
    export default App;

