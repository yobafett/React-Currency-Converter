import { Component, useState, useEffect } from 'react';

import './App.css';

const App = (props) => {

  const [to, setTo] = useState(props.counter);
  const [currency, setCurrency] = useState();

  function getCurrency(from, amount) {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "lyPt978yxB43iRMTwc1lPKlLC9MdeL5U");

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=rub&from=${from}&amount=${amount}`, requestOptions)
      .then(response => response.text())
      .then(result => setTo(Math.floor(JSON.parse(result).result)))
      .catch(error => console.log('error', error));
  }

  return (
    <div class="app">
      <div class="values">
        <input class="counter" onChange={(e) => setTo(e.target.value)} />
        <div class="counter">{to}</div>
      </div>
      <div class="controls">
        <button onClick={() => getCurrency('rub', to)}>RUB</button>
        <button onClick={() => getCurrency('usd', to)}>USD</button>
        <button onClick={() => getCurrency('eur', to)}>EUR</button>
        <button onClick={() => getCurrency('cny', to)}>CNY</button>
      </div>
    </div>
  );
}

export default App;
