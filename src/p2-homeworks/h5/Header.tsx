import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'


function Header() {

    return (<div style={{display: "inline-block"}}>
            <div className={s.mainDiv}>
                <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            </div>
            <div className={s.buttonSlide}></div>
        </div>

    )
}

export default Header
