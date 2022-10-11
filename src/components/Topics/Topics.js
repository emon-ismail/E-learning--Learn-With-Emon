import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = ({params}) => {
    const quiz=useLoaderData();
     console.log(quiz);
    // const {questions,question}=quiz;
    return (
        <div>
            {/* <h1>from topics {questions}</h1>
            <h2>{question}</h2>
            {
                 questions.map((question)=><Quiz key={question.id} quiz></Quiz>)
            } */}
        </div>
    );
};

export default Topics;