import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'
import img from './delete.png'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={style.affairItem}>
            <span>{props.affair.name}</span>
            <span>[{props.affair.priority}]</span>

            <button className={style.deleteButton}  onClick={deleteCallback}><img className={style.delete} src={img} alt=""/></button>
        </div>
    )
}

export default Affair
