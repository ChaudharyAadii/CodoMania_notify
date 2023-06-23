import React from 'react';
import './Blocks.css';

export default function Blocks2({ data }) {
    return (
        <>
            <div className='top'>
                {data.map(item => {
                    if (item.phase === "BEFORE") {
                        return (
                            <div id='block' key={item.id}>
                                <h3 id='head'>Name: {item.name}</h3>
                                {/* <p>Link: {item.url}</p> */}
                                <p>Start time: {new Date(item.startTimeSeconds * 1000).toDateString()} &nbsp; {new Date(item.startTimeSeconds * 1000).toLocaleTimeString()}</p>
                                <p>Duration: {item.durationSeconds / 3600} hours</p>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}