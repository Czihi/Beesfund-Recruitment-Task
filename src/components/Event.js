import React from "react";
import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";

const Event = (props) => {
    return (<div className="eventGroup">
        <LeftPanel   //section with date and type of event
            mode={props.mode}
            date={props.date}
            image={props.image}
        />
        <MiddlePanel  //section with title of event
            mode={props.mode}
            title={props.title}
            url={props.url}
        />
        <RightPanel //section with description of event
            mode={props.mode}
            desc={props.desc}
        />
    </div>)
};
export default Event;