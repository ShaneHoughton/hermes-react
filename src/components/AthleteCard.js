import React from 'react'
import EventMark from './EventMark'
function AthleteCard({athleteData}) {
    const athleteName = formatName(athleteData.name);
    const marks = athleteData.marks;
    return (
        <div className="athlete-card">
            <h1 className="athlete-name">{athleteName}</h1>
            <div className='athlete-details'>
            
               {
               marks.map((eventItem, index)=>
               <EventMark className="event-info" key={index} eventItem={eventItem} />)
               }
            
            </div>
        
        </div>
    )
}

function formatName(name){
    const splitName = name.split("_");
    return `${splitName[1]} ${splitName[0]}`;
   
}


export default AthleteCard