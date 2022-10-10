import { data } from 'autoprefixer';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Quiz = ({quiz}) => {
    // const {id,name,logo}=quiz;
    const {data}=useLoaderData()
    return (
        <div>
            <h1>Name: {data.name}</h1>
            {/* <h5> name : <Link to={`/quiz/${id}`}>{name} </Link></h5> */}
        </div>
    );
};

export default Quiz;