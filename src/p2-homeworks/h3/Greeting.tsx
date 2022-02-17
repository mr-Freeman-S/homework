import React,{KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: any // need to fix any
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
    onKeyPressHandler: (e:KeyboardEvent<HTMLInputElement>)=> void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : s.notError // need to fix with (?:)

    return (
        <div className={s.main}>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorText}>{error}</div>
        </div>
    )
}

export default Greeting
