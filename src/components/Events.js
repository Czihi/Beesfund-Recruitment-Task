import React from "react";
import Event from "./Event";

const Events = (props) => {
    let elements=[];
    let events=props.events;

    // List of our friends

// Sort array by date in DESCENDING order
    if(!props.err) {
        events.sort(function (a, b) {
            if (a.datetime > b.datetime) return -1;
            if (a.datetime < b.datetime) return 1;
            return 0;
        });
        events.reverse();
    console.log(events)
        for(let event in events){
            elements.push( <Event key={event}
                                  mode={event%2} //dark/light mode
                                  date={events[event].datetime}//API event date
                                  image={events[event].type} //API event type
                                  title={events[event].name} //API event title
                                  desc={events[event].description} //API event description
                                  url={events[event].registration_url} // API event registration url
            />);
        }
    }





    return (<div>
        {elements}
    </div>)
};
export default Events;