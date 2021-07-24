import React from "react";

interface IdentifierProps {
    currentSection : string;
}


export default function PureIdentifier(props : IdentifierProps){
    //Using props, Identifier is a pure component with no side-effects!
    return (
        <div className = "odd-component">
            The URL currently contains {props.currentSection}
        </div>
    );
}