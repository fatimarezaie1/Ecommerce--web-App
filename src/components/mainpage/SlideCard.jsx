import React, { useRef, useState } from 'react';
import {Sdata} from './Sdata'
import SlideData from './SlideData';

export default function SlideCard() {
    const[index, setIndex] = useState(1);
    const{id, title, desc, cover} = Sdata[index];
        
    function handleNext(){
        setIndex(prev => prev+1)
        if(index >= Sdata.length-1)
        setIndex(0)
    }
    function handlePre(){
        setIndex(prev => prev-1)
        if(index <= 0)
        setIndex(Sdata.length -1)
    }
  return (
    <div className='f_flex'>
        <div className='pre' onClick={handlePre}>next</div>
        <SlideData title={title} desc={desc}  cover={cover} />
        <div className='next' onClick={handleNext}>prev</div>
    </div>
  )
}
