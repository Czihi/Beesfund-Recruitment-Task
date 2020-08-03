import React from "react";
import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";

const Event = (props) => {
    return (<div className="eventGroup">
        <LeftPanel
            mode={props.mode}
            date={props.date}
            image={props.image}
        />
        <MiddlePanel
            mode={props.mode}
            title={props.title}
        />
        <RightPanel
            mode={props.mode}
            desc={props.desc}
        />
    </div>)
};
export default Event;