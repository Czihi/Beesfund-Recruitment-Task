import React from "react";

const MiddlePanel = (props) => {
    return (<div className={"middlePanel" + props.mode}>
        <h3 className="eventTitle">{props.title}</h3>
        <div className={"triangle-right" + props.mode}></div>
        <a href={props.url}>
        <button className={"registerButton" + props.mode}>ZAPISZ SIĘ</button>
        </a>
    </div>)
};
export default MiddlePanel;