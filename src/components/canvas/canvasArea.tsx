import React from 'react'
import style from './canvasArea.module.css'
import Canvas from "./canvas/canvas";

function CanvasArea() {

    return (
        <div className={style.canvasArea}>
            <div className={style.canvasHeader}>
                <h2>Canvas</h2>
            </div>
            <Canvas/>
        </div>
    )
}

export default CanvasArea