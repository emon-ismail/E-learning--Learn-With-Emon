import React from 'react';
import Lottie from "lottie-react";
import errorr from "../errorr.json";

const Error = () => {
    return (
        <div>
             <Lottie className="w-100% " animationData={errorr} loop={true} />
        </div>
    );
};

export default Error;