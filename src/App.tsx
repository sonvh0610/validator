import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { PERFORM_ERROR } from './validator/enums';
import InputType from './validator/InputType';
import IsNumberCondition from './validator/Conditions/IsNumberCondition';
import Validator from './validator/Validator';

class App extends React.Component {
  public render() {
    const validator = Validator.getInstance();
    
    const numberValidation = validator.createValidator()
    .addCondition(new IsNumberCondition())
    .setPerformError(PERFORM_ERROR.RED_TEXT);


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
          <label htmlFor='isEmail'>Is email:</label>
          <InputType id='isEmail' type='text' inputValidation={numberValidation}/>
          
        </div>
      </div>
    );
  }
}

export default App;
