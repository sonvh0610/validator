import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { PERFORM_ERROR } from './validator/enums';
import InputType from './validator/InputType';
import IsNumberCondition from './validator/Conditions/IsNumberCondition';
import Validator from './validator/Validator';
import EmailCondition from './validator/Conditions/EmailCondition';
import UrlCondition from './validator/Conditions/UrlCondition';
import RegexCondition from './validator/Conditions/RegexCondition';
// import CustomCondition from './validator/Conditions/CustomCondition';

class App extends React.Component {
  public render() {
    const validator = Validator.getInstance() 
    // .setPerformError(PERFORM_ERROR.RED_TEXT);
    
    const numberValidation = validator.createValidator().addCondition(new IsNumberCondition())
    const emailValidation = validator.createValidator().resetWithConditions(new EmailCondition())
    const urlValidation = validator.createValidator().resetWithConditions(new UrlCondition())
    const regexValidation = validator.createValidator()
      .resetWithConditions(new RegexCondition(/^[A-Z]+$/i))
      .setPerformError(PERFORM_ERROR.ALERT)
   


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <label htmlFor='isNumber'>Is number:</label>
          <InputType id='isNumber' type='text' inputValidation={numberValidation}/>
          <br/>
          <br/>
          <label htmlFor='isEmail'>Is email:</label>
          <InputType id='isEmail' type='text' inputValidation={emailValidation}/>
          <br/>
          <br/>
          <label htmlFor='isUrl'>Is Url:</label>
          <InputType id='isUrl' type='text' inputValidation={urlValidation}/>
          <br/>
          <br/>
          <label htmlFor='isRegex'>Regex matched (only alphabet) | Alert Strategy:</label>
          <InputType id='isRegex' type='text' inputValidation={regexValidation}/>
          <br/>
          <br/>
          
          
        </div>
      </div>
    );
  }
}

export default App;
