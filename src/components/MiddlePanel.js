import React from "react";

const MiddlePanel = (props) => {
    return (<div className={"middlePanel" + props.mode}>
        <h3 className="eventTitle">{props.title.toUpperCase()}</h3>
        <div className={"triangle-right" + props.mode}></div>
        <a href={props.url} target="_blank"  rel="noopener noreferrer">
        <button className={"registerButton" + props.mode}>ZAPISZ SIĘ</button>
        </a>
    </div>)
};
export default MiddlePanel;