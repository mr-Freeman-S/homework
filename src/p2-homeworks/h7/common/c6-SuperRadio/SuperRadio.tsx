import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './radioStyle.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.target.name)
        onChange && onChange(e)
        // onChange, onChangeOption
    }


    const mappedOptions: object[] = options ? options.map((o, i) => ( // map options with key
        <label className={s.labelInput} key={name + '-' + i}>
            <input
                type={'radio'}
                name={o}
                checked={value === o}
                value={value}
                onChange={onChangeCallback}// name, checked, value, onChange
            />
            <span className={s.radioText}>{o}</span>
        </label>
    )) : []
    return (
        <div className={s.radioButton}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
