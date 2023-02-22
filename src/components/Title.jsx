import '../App.css';
import { useState } from 'react';

export default function Title ({text}){
    return(
        <div style={{width: "100%"}}>
            <h1 className='title'>{text}</h1>
        </div>
    );
};