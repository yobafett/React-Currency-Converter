import { useState } from "react";

import InputField from "../CurrencyInput/CurrencyInput";
import CurrencyControls from "../CurrencyControls/CurrencyControls";

import './CurrencyBlock.sass';

const InputBlock = (props) => {

    return (
        <div className="block">
            <div className="values">
                <InputField value={props.value} setValue={props.setValue} />
            </div>
            <div className="controls">
                <CurrencyControls setCurrency={props.setCurrency}/>
            </div>
        </div>
    )
}

export default InputBlock;