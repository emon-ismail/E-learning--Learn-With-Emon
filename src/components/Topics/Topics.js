import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Quiz from '../Quiz/Quiz';

const Topics = ({params}) => {
    const quiz=useLoaderData();
     console.log(quiz.data.total);
    const {questions,id,total,data,name}=quiz;
    return (
        <div>
            <h1>{data.name}</h1>
            <h3>Total Quizes :{data.total}</h3>

          
            {
                data.questions.map((questionn)=><Question key={questionn.id} questionn={questionn} ></Question>)
            }
         
         
        </div>
    );
};

export default Topics;