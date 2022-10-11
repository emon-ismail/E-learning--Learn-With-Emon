import React from 'react';
import Lottie from "lottie-react";
import errorr from "../errorr.json";

const Error = () => {
    return (
        <div className='ms-5  ms-5  d-flex justify-content-center'>
             <Lottie className="w-50 ms-5 " animationData={errorr} loop={true} />
        </div>
    );
};

export default Error;