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
                
            
            <div class="form-check">
            <input onClick={()=>check(option)} class="form-check-input ms-5" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
                
            <h6 className=''>{option}</h6>
            
            
            </label>
            <ToastContainer />
         </div>
        
        </div>
        </div>
    );
};

export default Option;