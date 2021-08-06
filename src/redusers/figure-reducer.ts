import {ellipseStyle, rectangleStyle} from "../assets/styles/figuresStyles";
import {FigureType} from "../assets/types/types";
import {createSlice} from "@reduxjs/toolkit";
import {v1} from "uuid";


export const figureItems = [
    {style: ellipseStyle, id: v1()},
    {style: rectangleStyle, id: v1()}
]

const initialState: InitialStateType = {
    figure: figureItems
}

const slice = createSlice({
    name: 'figures',
    initialState: initialState,
    reducers: {}
})

export type InitialStateType = {
    figure: Array<FigureType>
}

export const figuresReducer = slice.reducer