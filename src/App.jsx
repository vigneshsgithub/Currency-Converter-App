

import './App.css'

function App() {


  return (
    <>
      <div className='currency-converter'>
       <div className="box"></div>
       <div className="data"></div>
       <h1>Currency Converter</h1>
       <div className="input-container">
        <label>Amount:</label>
        <input type="number" id="amt" />
       
        {/*From currency*/ }
       <div className="input-container">
        <label htmlFor='fromCurrency' >From Currency :</label>
        <select id="fromCurrency">
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

       {/*To currency*/ }
       <div className="input-container">
        <label htmlFor='ToCurrency' >To Currency :</label>
        <select id="ToCurrency">
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
        <p>1 INR is equal to 83.25 USD</p>
       </div>
      </div>
      </div>
     
    </>
  )
}

export default App
