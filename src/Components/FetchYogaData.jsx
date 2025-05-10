import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css';

const FetchYogaData = () => {
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
  return (
    <>
    <h1 className='usefetch_heading'>Use Fetch Yoga Custom Hook</h1>
    <ul className='list_data_main'>
        {data && data.map((e,index) => (
            <li key={index} className='list_data'>
                <h3>{e.name}</h3>
                <p><strong>{e.benefits}</strong></p>
                <p><strong>{e.time_duration}</strong></p>
            </li>
        ))}
     </ul>
    </>
  )
}

export default FetchYogaData