import * as React from 'react';

export default class InputType extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      renderBefore: null,
      renderAfter: null
    };
  }

  public performValidation = (e: any) => {
    const { onBlur, inputValidation } = this.props;
    if (inputValidation) {
      const result = inputValidation.execute(e.target.value);
      this.setState({ renderAfter: result || null });
    }
    if (onBlur) {
      onBlur(e);
    }
  }

  public render() {
    const { type } = this.props;
    return (
      <div>
        <input type={type} onBlur={this.performValidation} />
        {this.state.renderAfter}
      </div>
    );
  }
}