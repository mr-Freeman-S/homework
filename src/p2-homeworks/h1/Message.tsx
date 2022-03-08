import React from 'react'
import styles from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={styles.main}>
            <div className={styles.avatar}><img className={styles.ava} src={props.avatar} alt="avatar"/></div>
            <div  className={styles.message}>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                <p className={styles.time}>{props.time}</p>
            </div>
            <svg height="0" width="0">
                <defs>
                    <clipPath id="svgPath">
                        <path fill="#FFFFFF" d="M10,10H0V0H0A10,10,0,0,0,10,10Z"/>
                    </clipPath>
                </defs>
            </svg>

        </div>
    )
}

export default Message
