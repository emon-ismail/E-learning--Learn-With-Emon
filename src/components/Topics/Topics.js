import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = ({params}) => {
    const quiz=useLoaderData();
    const {questions}=quiz;
    return (
        <div>
            <h1>from topics</h1>
            {
                // allQuizes.data.map((singleQuiz)=><)
            }
        </div>
    );
};

export default Topics;