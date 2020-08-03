import React from "react";
import Events from "./Events";

const Main = (props) => {
    return (<div>
        <h3 className="title">WYDARZENIA</h3>
        <Events
        events={props.events}
        err={props.err}
        />
    </div>)
};

export default Main;