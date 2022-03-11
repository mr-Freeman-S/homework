import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from "./HW6.module.css"

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', ''))
        /*let restoreValue = localStorage.getItem('editable-span-value')
        if (restoreValue!== null) {
            setValue(JSON.parse(restoreValue))
        }*/
    }

    const styleSpan = {
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center"
    }
    const styleButtons = {
        "display": "flex",
        "justifyContent": 'center'
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div style={styleSpan}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                    spanClassName={s.editSpan}
                />
            </div>
            <div style={styleButtons}>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
