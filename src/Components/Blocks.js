import React from 'react';
import './Blocks.css';

export default function Blocks({ data }) {
  return (
    <>
      <div className='top'>
        {data.map(item => (
          <div id='block' key={item.url}>
            <h3 id='head'>Name: {item.name}</h3>
            <p>Link: <a href={item.url}> {item.url} </a></p>
            <p>Start time: {item.start_time}</p>
            <p>Duration: {item.duration / 3600} hours</p>
          </div>
        ))}
      </div>
    </>
  )
}