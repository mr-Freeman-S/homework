import React, {MouseEventHandler, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from "moment";
import s from './clock.module.css'
function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<string>(moment().format('hh:mm:ss'))
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(moment().format('hh:mm:ss'))
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date // fix with date
    const stringDate = moment().format('DD.MM.YYYY') // fix with date


    return (
        <div>
            <div className={s.clock} >
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
