import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { PERFORM_ERROR } from './validator/enums';
import InputType from './validator/InputType';
import InputValidator from './validator/InputValidator';
import CustomCondition from './validator/Conditions/CustomCondition';

class App extends React.Component {
  public render() {
    const inputValidation = new InputValidator();
    inputValidation.addCondition(
      new CustomCondition((text) => {
        return text.length > 5 ? '' : 'Text must longer than 5';
      })
    );
    inputValidation.setPerformError(PERFORM_ERROR.ALERT);

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
