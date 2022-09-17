
import arrow from '../../img/arrow-right.svg';
import loader from '../../img/loader.svg';
import './CurrencyBtn.sass';

const CurrencyBtn = (props) => {

    return (
        <button
            className='currencyBtn'
            disabled={props.isDisabled}
            onClick={props.onClickEvent}>
            <img src={props.isLoad ? loader : arrow} />
        </button>
    )
}

export default CurrencyBtn;