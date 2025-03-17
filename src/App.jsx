

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [Amount, setAmount] = useState(1);
  const [Fromcurrency, SetFromCurrency] = useState('USD');
  const [ToCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConveredAmount] = useState(null);
  const[ExchangeRate,setExchangeRate]=useState(null);


  useEffect(()=>{
    const getExchangeRate = async()=>{
      try{
        let url= `https://api.exchangerate-api.com/v4/latest/${Fromcurrency}`;
        const response= await axios.get(url);
        console.log(response);
        setExchangeRate(response.data.rates[ToCurrency])
      }catch(error){
        console.log("This is the error you got : ",error)
      }
    }
    getExchangeRate();
  },[Fromcurrency,ToCurrency]);


  useEffect(()=>{
      if(ExchangeRate !== null){
        setConveredAmount((Amount * ExchangeRate).toFixed(2));
      }
  },[Amount,ExchangeRate])

  const handleAmountChange = (e)=>{
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value)?0:value);
  }

  const handleFromCurrencyChange = (e)=>{
    
    SetFromCurrency(e.target.value);
  }

  const handleToCurrencyChange = (e)=>{

    setToCurrency(e.target.value);
  }

  return (
    <>
      <div className='currency-converter'>
        <div className="box"></div>
        <div className="data"></div>
        <h1>Currency Converter</h1>
        <div className="input-container">
          <label>Amount:</label>
          <input type="number" id="amt" value={Amount} onChange={handleAmountChange}/>

          {/*From currency*/}
          <div className="input-container">
            <label htmlFor='fromCurrency' >From Currency :</label>
            <select id="fromCurrency" value={Fromcurrency} onChange={handleFromCurrencyChange}>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>

          {/*To currency*/}
          <div className="input-container">
            <label htmlFor='ToCurrency' >To Currency :</label>
            <select id="ToCurrency" value={ToCurrency} onChange={handleToCurrencyChange}>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          <div className="result">
              <p>{Amount} {Fromcurrency} is equal to {convertedAmount} {ToCurrency}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
