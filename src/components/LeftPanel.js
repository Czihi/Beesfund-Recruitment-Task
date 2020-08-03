import React from "react";
import calendar from "../images/calendar.png"
import investorsday from "../images/investorsday.svg"
import webinar from "../images/webinar.svg"
import meetup from "../images/meetup.svg"

const LeftPanel = (props) => {
    const images = {"investorsday": investorsday, "webinar": webinar, "meetup": meetup};
    return (<div className={"leftPanel" + props.mode}>
        <div className="dateGroup">
            <img className="calendarImage" src={calendar} alt="calendar"/>
            <p className="date">{props.date}</p>
        </div>
        <img className="eventImage" src={images[props.image]} alt={props.image}/>
    </div>)
};

export default LeftPanel;