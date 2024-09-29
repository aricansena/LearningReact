import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios'

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_WvxTBdSviayqc3LxLrbWKkJjDTnQx7RJGVf5DVWf";

function Currency() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        let EXCHANGE_API = `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`;
        const response = await axios.get(EXCHANGE_API);
        const result = ((response.data.data[toCurrency]) * amount).toFixed(5);
        setResult(result);
        // console.log(amount)
        // console.log(fromCurrency)
        // console.log(toCurrency)
    }

    return (
        <div className='currency-div'>
            <div style={{ marginTop: '-15px', fontFamily: 'arial' }}>
                <h3>Döviz Kuru Uygulaması</h3>
            </div>
            <div>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} className='amount' type='number'></input>

                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaArrowRight style={{ fontsize: '20px', marginRight: '10px' }} />
                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} className='result' type='number'></input>
            </div>
            <div>
                <button onClick={exchange} className='exchange-button'>Çevir</button>
            </div>
        </div>
    )
}

export default Currency