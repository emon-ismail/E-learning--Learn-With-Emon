import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';


const Statics = () => {
    const [info,setInfo]=useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])
    

    return (
       <ResponsiveContainer  >
        
         <div className='container mt-5 ms-5  d-flex justify-content-center'>
            
            <LineChart  width={400} height={300} data={info.data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  
  
        </div>
        
       </ResponsiveContainer>
    );
};

export default Statics;