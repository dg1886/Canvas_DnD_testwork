import React from "react";
import {FigureType} from "../../../assets/types/types";

type PropsType = {
    figure: FigureType
}

function Figure(props: PropsType) {

    return (
        <div style={props.figure.style} draggable={true}/>
    )
}

export default Figure