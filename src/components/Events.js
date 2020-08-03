import React from "react";
import Event from "./Event";

const Events = () => {
    return (<div>
        <Event
            mode={0} //dark/light mode
            date="24/02/2020 wtorek 18:00" //API event date
            image="webinar" //API event type
            title="WYDARZENIE - WEBINAR" //API event title
            desc="Spotkajmy się - webinar!  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci." //API event description
        />
        <Event
            mode={1}
            date="24/02/2020 wtorek 19:00"
            image="investorsday"
            title="WYDARZENIE - INVESTORSDAY"
            desc="Spotkajmy się - investorsday!  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci."
        />

        <Event
            mode={0}
            date="24/02/2020 wtorek 20:00"
            image="meetup"
            title="WYDARZENIE - MEETUP"
            desc="Spotkajmy się - meetup!  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci."
        />
    </div>)
};
export default Events;