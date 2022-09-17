import { useState, useEffect } from 'react';

import './CurrencyControls.sass';

const CurrencyControls = (props) => {
    const [activeBtn, setActiveBtn] = useState('rub');

    useEffect(() => {
        props.setCurrency(activeBtn);
    }, [activeBtn])

    const btnsData = ['rub', 'usd', 'eur', 'cny'];
    const btns = btnsData.map(id => (
        <button
            id={id}
            key={id}
            onClick={() => setActiveBtn(id)}
            className={activeBtn === id ? 'active' : ''}>
            {id.toUpperCase()}
        </button>
    ));

    return (
        <> {btns} </>
    )
}

export default CurrencyControls;