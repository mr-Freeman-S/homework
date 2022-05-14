import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {RequestAPI} from "./RequestAPI";

const Request = () => {
    const [checkboxValue, setCheckboxValue] = useState<boolean>(false)
    const [answer, setAnswer] = useState<string | null>(null)
    const onClickCallback = () => {
        RequestAPI.postCheckBoxValue(checkboxValue)
            .then(res => setAnswer(res.statusText))
            .catch(err => setAnswer(err.statusText))
    }
    return (
        <div>
            <h3>HW13</h3>
            <SuperCheckbox onChangeChecked={setCheckboxValue} checked={checkboxValue}/>
            <SuperButton onClick={onClickCallback}>POST</SuperButton>
            <span>{answer}</span>
        </div>
    );
};

export default Request;