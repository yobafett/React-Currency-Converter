import { useState, useEffect } from 'react';
import CurrencyService from './services/CurrencyService'

import InputBlock from './components/CurrencyBlock/CurrencyBlock';
import CurrencyBtn from './components/CurrencyBtn/CurrencyBtn';
import './App.sass';

const App = (props) => {
  const [from, setFrom] = useState();
  const [fromCurrency, setFromCurrency] = useState();
  const [to, setTo] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [isLoad, setIsLoad] = useState(false);
  const [isConvertDisabled, setIsConvertDisabled] = useState(true);
  const currencyService = new CurrencyService();

  useEffect(() => {
    const isConvertReady = from > 0 && fromCurrency && toCurrency && !isLoad;
    setIsConvertDisabled(!isConvertReady);
  }, [from, fromCurrency, to, toCurrency, isLoad])

  useEffect(() => {
    document.title = `Currency converter ${fromCurrency.toUpperCase()} -> ${toCurrency.toUpperCase()}`;
  }, [fromCurrency, toCurrency])

  const convert = () => {
    setIsLoad(true);

    currencyService.getCurrency(fromCurrency, toCurrency, from)
      .then(res => {
        setTo(res);
        setIsLoad(false);
      });
  }

  return (
    <div className="app">
      <InputBlock
        value={from ? from : 0}
        setValue={setFrom}
        setCurrency={setFromCurrency} />
      <CurrencyBtn
        isLoad={isLoad}
        isDisabled={isConvertDisabled}
        onClickEvent={convert} />
      <InputBlock
        value={to ? to : 0}
        setValue={setTo}
        setCurrency={setToCurrency} />
    </div>
  );
}

export default App;
