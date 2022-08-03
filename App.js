import { useState } from 'react';
import './App.css';
import {numbers, lowerCaseLetters, upperCaseLetters, symbols} from './Characters'
function App() {


 const [password, setPassword] = useState('')
 const [passwordLength, setPasswordLength] = useState(20)
 const [includeUpperCase, setIncludeUpperCase] = useState(false)
 const [includeLowerCase, setIncludeLowerCase] = useState(false)
 const [includeNumbers, setIncludeNumbers] = useState(false)
 const [includeSymbols, setIncludeSymbols] = useState(false)


 const handleGeneratePass = () => {
    let listOfCharacters = '';
   if (includeUpperCase) listOfCharacters += upperCaseLetters
   if (includeLowerCase) listOfCharacters += lowerCaseLetters;
   if (includeNumbers) listOfCharacters += numbers;
   if (includeSymbols) listOfCharacters += symbols;

    setPassword(formatPassword(listOfCharacters))
}

const formatPassword = (passToFormat) => {
 let formatedPass = '';

 for (let i = 0; i < passwordLength; i++){
    let index = Math.round(Math.random() * passToFormat.length)
    formatedPass += passToFormat.charAt(index)
 }
 return formatedPass;
}

const clearPass = () => {
  setPassword('')
}
  return (
    <div className="App">
  <div className='container'>
    <div className='generator'>
      <h2  className='generator__header'>
        Password Generator
      </h2>
      <div className='generator__password'>
        <h3>{password}</h3>
        <button className='copy__btn' onClick={() => navigator.clipboard.writeText(password)}>
          <i>Click here to copy your Password
          </i>
        </button>
      </div>
   <div className='form-group'>
    <label>How long the pass?</label>
    <input type='number' onChange={(event) => setPasswordLength(event.target.value)} id="Password length" name='Password length'
     defaultValue={passwordLength}
    ></input>
   </div>
   <div className='form-group'>
    <label>Include Uppercase Letters</label>
    <input 
      checked={includeUpperCase}
      onChange={(event) => setIncludeUpperCase(event.target.checked)}
      type='checkbox' 
      id="uppercase-letters" 
      name='uppercase-letters'>

      </input>
   </div>
   <div className='form-group'>
    <label>Include Lowercase Letter</label>
    <input 
    checked={includeLowerCase}
    onChange={(event) => setIncludeLowerCase(event.target.checked)}  
    type='checkbox' 
    id="lowercase-letters" 
    name='lowercase-letters'>

    </input>
   </div>
   <div className='form-group'>
    <label>Include Number</label>
    <input 
    checked={includeNumbers}
    onChange={(event) => setIncludeNumbers(event.target.checked)} 
    type='checkbox' 
    id="lowercase-letters" 
    name='lowercase-letters'>

    </input>
   </div>
   <div className='form-group'>
    <label htmlFor='include-symbols'>Include symbols</label>
    <input 
    checked={includeSymbols}
    onChange={(event) => setIncludeSymbols(event.target.checked)} 
    type='checkbox' 
    id="include-symbols" 
    name='include-symbols'>

    </input>
   </div>
    </div>
    <button className="generator__btn" onClick={handleGeneratePass}>Generate Password</button>
    <button className='clear-btn' onClick={clearPass}>clear</button>
  </div>

    </div>
  );
}

export default App;
