import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';

import CheckboxItem from './CheckboxItem/CheckboxItem';
import './CheckboxGroup.scss';

class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentCheckboxChecked: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.updateParentWithChildren(nextProps);
  }

  componentWillMount() {
    this.updateParentWithChildren(this.props);
  }

  handleParentCheckboxChange = (isChecked) => {
    const { checkboxes, onCheckboxGroupChange } = this.props;
    const newCheckState = checkboxes.map((aCheckbox) => ({
      ...aCheckbox,
      checked: isChecked,
    }));
    onCheckboxGroupChange(newCheckState);
  };

  updateParentWithChildren = (props) => {
    const { checkboxes } = props;
    let allChecked = false;
    for (let i = 0; i < checkboxes.length; i += 1) {
      if (checkboxes[i].checked) {
        allChecked = true;
      } else {
        allChecked = false;
        break;
      }
    }
    this.setState({
      parentCheckboxChecked: allChecked,
    });
  };

  handleChildCheckboxChange = (isChecked, index) => {
    const { checkboxes } = this.props;
    const { onCheckboxGroupChange } = this.props;
    const newCheckState = checkboxes.map(
      (aCheckbox, i) => (index === i ? { ...aCheckbox, checked: isChecked } : aCheckbox)
    );
    onCheckboxGroupChange(newCheckState);
  };

  renderCheckboxes = () => {
    const { checkboxes } = this.props;
    if (!checkboxes) {
      return null;
    }
    return checkboxes.map((aCheckbox, index) => (
      <CheckboxItem
        key={index}
        checkboxLabel={aCheckbox.label}
        checkboxValue={aCheckbox.value}
        checked={aCheckbox.checked}
        checkboxChangeCallback={(checkStatus) => this.handleChildCheckboxChange(checkStatus, index)}
      />
    ));
  };

  render() {
    const { parentCheckboxChecked } = this.state;
    return (
      <div className="checkbox-wrapper">
        <FormGroup>
          <div className="checkbox-head">
            <CheckboxItem
              checkboxLabel="All"
              checkboxValue="all"
              checked={parentCheckboxChecked}
              checkboxChangeCallback={this.handleParentCheckboxChange}
            />
          </div>
          <div className="checkbox-children">{this.renderCheckboxes()}</div>
        </FormGroup>
      </div>
    )
  }
}

export default CheckboxGroup;