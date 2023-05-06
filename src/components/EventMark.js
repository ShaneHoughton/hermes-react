import React from 'react'
import '../styles.css';


export default function EventMark(eventItem) {
  return <div className='event'>
    <h2 className='align-right wide'>
    {eventItem.eventItem.event} 
    </h2>
    
    <h2>|</h2>

    <h2 className='align-left wide'>{eventItem.eventItem.mark}</h2> 
    
    </div>
}
