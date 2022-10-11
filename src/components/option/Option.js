import React from 'react';
import { ToastContainer, toast } from "react-toastify";

const Option = ({option,correctAnswer}) => {
    function check(option){
        
           if(option===correctAnswer){
           
            toast("Correct Answer!")
           }
           else {
            toast("Wrong Answer!")
           }
        }
    return (
        <div>
            <div>
                
            
            <div className="form-check">
            <input onClick={()=>check(option)} className="form-check-input ms-5" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label" for="flexRadioDefault1">
                
            <h6 className=''>{option}</h6>
            
            
            </label>
            <ToastContainer />
         </div>
        
        </div>
        </div>
    );
};

export default Option;