import React, { Component } from 'react';
import CheckboxGroup from './CheckboxGroup/CheckboxGroup';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: [
        {
          label: 'Shawshank Redemption',
          value: 'shawshankRedemption',
          checked: true,
        },
        {
          label: 'The Godfather',
          value: 'theGodfather',
          checked: true,
        },
        {
          label: 'The Dark Knight',
          value: 'theDarkKnight',
          checked: true,
        },
        {
          label: 'Saving Private Ryan',
          value: 'savingPrivateRyan',
          checked: true,
        },
        {
          label: 'Schindlers List',
          value: 'schindlersList',
          checked: true,
        },
      ]
    };
  }

  handleCheckboxgroupChange = (updatedUsecaseCBState) => {
    this.setState({
      checkboxes: updatedUsecaseCBState,
    });
  };

  render() {
    const { checkboxes } = this.state;
    return (
      <div>
        <h3>
          Checkboxes Group use case in React with material-ui:
        </h3>
        <p>Which of these is /are your all time favorite ???</p>
        <CheckboxGroup
          checkboxes={checkboxes}
          onCheckboxGroupChange={this.handleCheckboxgroupChange}
        />
      </div>
    );
  }
}

export default App;
