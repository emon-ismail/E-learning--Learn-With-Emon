import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const Statics = () => {
    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 880, pv: 2400, amt: 2400},
        {name: 'Page C', uv: 9900, pv: 2400, amt: 2400},
        {name: 'Page D', uv: 8600, pv: 2400, amt: 2400},
    ];
    return (
        <div className='container mt-5 ms-5  d-flex justify-content-center'>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
        </div>
    );
};

export default Statics;