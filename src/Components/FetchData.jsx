import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css';

const FetchData = () => {
    const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data);
  return (
    <>
    <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
    <ul className='list_data_main'>
        {data && data.map((e,index) => (
            <li key={index} className='list_data'>
                <h3>{e.name}</h3>
                <p><strong>{e.benefits}</strong></p>
                <p><strong>{e.best_time_to_intake}</strong></p>
                <p><strong>{e.importance}</strong></p>
                <p><strong><img src={e.image} /></strong></p>
            </li>
        ))}
     </ul>
    </>
  )
}

export default FetchData