import React, { useState } from "react";
import Header from "./Components/Header";
// import Middle from "./Components/Middle";

const page = () => {
  const [todo,setTodo]= useState("");
  const [todos,setTodos]= useState("");
  const [todos,setTodos]= useState("");
  
  const handleEdit=()=>{
    
  }
  const handleDelete=()=>{

  }
  const handleAdd=()=>{
    setTodos([...todos,{todo, isCompleted:false}])
    setTodos(" ")
    
  } 
  
  return (
    <>
      <Header />
      <div class="w-100 m-10 mr-20">
        <div class="relative w-[80%] min-w-[200px] h-10 flex ">
          <input
            class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
          />
          <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
            Enter the task here
          </label>
          <button onClick={handleAdd} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 m-15 mx-5 border border-blue-700 rounded">
            Add
          </button>
        </div>

        <h2 className=" text-lg font-semibold ">Yours Todos</h2>

        <div className="Todos mt-10">
          <div className="Todo flex">
            <div className="text">{todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 m-5  border border-blue-700 rounded">
                Edit
              </button>
              <button onClick={handleDelete} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 m-5  border border-blue-700 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
