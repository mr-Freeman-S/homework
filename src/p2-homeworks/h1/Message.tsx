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
            <div className={styles.avatar}><img src={props.avatar} alt="avatar"/></div>
            <div  className={styles.message}>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                <p className={styles.time}>{props.time}</p>
            </div>

        </div>
    )
}

export default Message
