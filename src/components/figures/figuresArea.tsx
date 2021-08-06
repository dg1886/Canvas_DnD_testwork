import React from 'react'
import style from './figuresArea.module.css'
import Figure from "./figure/figure";
import {useSelector} from "react-redux";
import {FigureType} from "../../assets/types/types";
import {AppRootStateType} from "../../app/store";



function FiguresArea() {
    const figure = useSelector<AppRootStateType, Array<FigureType>>(state => state.figures.figure)
    return (
        <div className={style.figuresArea}>
            <div className={style.figuresHeader}>
                <h2>Figures</h2>
            </div>
            <div className={style.itemBlock}>
            {figure.map(figure => <Figure key={figure.id} figure={figure}/>)}
            </div>
        </div>
    )
}

export default FiguresArea