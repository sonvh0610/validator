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
    const inputValidation = validator.createValidator();
    inputValidation.addCondition(
      new IsNumberCondition()
    );
    inputValidation.setPerformError(PERFORM_ERROR.RED_TEXT);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <InputType type='text' inputValidation={inputValidation} />
        </div>
      </div>
    );
  }
}

export default App;
