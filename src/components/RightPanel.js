import React from "react";

const RightPanel = (props) =>{
    return(<div className={"rightPanel"+props.mode}>
        <div className="triangleWhite"></div>
        <p className="description">
            {props.desc}
        </p>
    </div>)
};
export default RightPanel