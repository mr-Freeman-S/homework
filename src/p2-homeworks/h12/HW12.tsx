import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red','gold','green', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.currentTheme); // useSelector
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio onChangeOption={onChangeCallback} value={theme} options={themes}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
