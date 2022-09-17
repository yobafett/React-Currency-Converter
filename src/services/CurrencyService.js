
class getCurrency {
    _url = 'https://api.apilayer.com/exchangerates_data';

    getCurrency = async (from, to, amount) => {
        let myHeaders = new Headers();
        myHeaders.append("apikey", "lyPt978yxB43iRMTwc1lPKlLC9MdeL5U");

        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        const res = await fetch(`${this._url}/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions);

        if (!res.ok) {
            throw new Error(`Fetch error. Status ${res.status}`);
        }
        
        const data = await res.json(); 

        return Math.round(data.result * 100) / 100;
    }
}



export default getCurrency;