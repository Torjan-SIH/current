import React from "react";
import './cardviewstyles.css';

export const PopUpHeiCard = (props) =>{
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupClose" onClick={() => props.setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : "";
}

