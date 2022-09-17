
import './CurrencyInput.sass';

const InputField = (props) => {

    const style = {
        width: `${50 + props.value.toString().length * 25}px`
    }

    return (
        <input
            type="number"
            value={props.value}
            style={style}
            onChange={(e) => props.setValue(e.target.value)} />
    );
}

export default InputField;