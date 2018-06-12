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
import CustomCondition from './validator/Conditions/CustomCondition';

class App extends React.Component {
  public render() {
    const validator = Validator.getInstance() 
    // .setPerformError(PERFORM_ERROR.RED_TEXT);
    
    const numberValidation = validator.createValidator().addCondition(new IsNumberCondition())
    const emailValidation = validator.createValidator().addCondition(new EmailCondition())
    const urlValidation = validator.createValidator().addCondition(new UrlCondition())
    const regexValidation = validator.createValidator()
      .addCondition(new RegexCondition(/^[A-Z]+$/i))
      .setPerformError(PERFORM_ERROR.ALERT);
    const multipleValidation = validator.createValidator()
      .addCondition(
        new RegexCondition(/^[a-zA-Z0-9]+$/i),
        new IsNumberCondition()
      )
      .setPerformError(PERFORM_ERROR.ALERT);

    const customValidation = validator.createValidator()
      .addCondition(new CustomCondition((text)=>{
        return text.length > 5 ? '' : 'Characters cannot be less than 5';
      }))
   

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <label htmlFor='numberValidator'>Is number:</label>
          <InputType id='numberValidator' type='text' inputValidation={numberValidation}/>
          <br/>
          <br/>
          <label htmlFor='emailValidator'>Is email:</label>
          <InputType id='emailValidator' type='text' inputValidation={emailValidation}/>
          <br/>
          <br/>
          <label htmlFor='urlValidator'>Is Url:</label>
          <InputType id='urlValidator' type='text' inputValidation={urlValidation}/>
          <br/>
          <br/>
          <label htmlFor='regexValidator'>Is matched with Regex (only alphabet) | Alert Strategy:</label>
          <InputType id='regexValidator' type='text' inputValidation={regexValidation}/>
          <br/>
          <br/>
          <label htmlFor='customValidator'>Mutiple conditions (Regex: character + number AND IsNumber)</label>
          <InputType id='customValidator' type='text' inputValidation={multipleValidation}/>
          <br/>
          <br/>
          <label htmlFor='customValidator'>Custom validator (String length can not less than 5):</label>
          <InputType id='customValidator' type='text' inputValidation={customValidation}/>
          <br/>
          <br/>
          
          
        </div>
      </div>
    );
  }
}

export default App;
