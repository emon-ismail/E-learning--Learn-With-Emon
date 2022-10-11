import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({questionn}) => {

 
    const {data}=useLoaderData();
    const {options,question,correctAnswer,id}=questionn;
    


     const check=()=>{

      if(options !=={correctAnswer}){
        toast("Ans is False");
       }
       else{
        toast("Ans is true");
       }
    
  }

  const trueAns=()=>{
    toast(correctAnswer);
  }

    

    return (

      
        <div className='container'>
    


            <h5
             className='bg-info p-3 mt-5 '>{question} <button onClick={trueAns}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
           </svg></button>
         <ToastContainer></ToastContainer>
           </h5>


<div className='row container mt-5'>
<div className='col '>
<div className="form-check">
  <button onClick={check}><input className="form-check-input"    type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></button>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    {options[0]}
  </label>
</div>

<div className="form-check  ">
 <button onClick={check}> <input className="form-check-input "   type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>  </button>
  <label className="form-check-label  " htmlFor="flexRadioDefault1">
    {options[1]}
  </label>
</div>
</div>

<div className='col'>
    <div className="form-check">
 <button onClick={check}> <input className="form-check-input"   type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></button>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    {options[2]}
  </label>
</div>

<div className="form-check">
  <button onClick={check}><input className="form-check-input"   type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></button>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    {options[3]}
  </label>
</div>
</div>
</div>

        </div>
    );
};

export default Question;