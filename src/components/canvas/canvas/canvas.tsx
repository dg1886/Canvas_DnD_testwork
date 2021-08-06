import React, {useEffect, useRef} from "react";

function Canvas() {
    //HTMLCanvasElement
    const canvasRef = useRef<any>('canvas')


    return (
        <div>
            <canvas id={'canvas'}/>
        </div>
    )
}

export default Canvas