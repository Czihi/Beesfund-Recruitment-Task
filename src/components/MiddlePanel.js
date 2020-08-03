import React from "react";
const MiddlePanel = (props) => {
    return(<div className={"middlePanel"+props.mode}>
        <h3 className="eventTitle">{props.title}</h3>
        <div className={"triangle-right"+props.mode}></div>
        <button className={"registerButton"+props.mode}>ZAPISZ SIĘ</button>
    </div>)
};
export default MiddlePanel;