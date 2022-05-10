import React from 'react'
import {TwoThumbInputRange} from "react-two-thumb-input-range";
import {debug} from "util";


type SuperDoubleRangePropsType = {
    onChangeRange1: (value: number) => void
    onChangeRange2: (value: number) => void
    value: [number, number]
    min: number
    max: number
    step?: number
    disable?: boolean

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange1, onChangeRange2, value,
        min, max, step, disable, ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (value: [number, number]) => {
        if(value[0]<value[1]) {
            onChangeRange1(value[0])
            onChangeRange2(value[1]);
        }

    }
    return (
        <>
            <TwoThumbInputRange values={value} onChange={onChangeCallback} min={min} max={max}/>
        </>
    )
}

export default SuperDoubleRange
