import * as React from 'react';
import Button from './Button';

class FilterButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleClick(value, event) {
    this.props.onChange(value);
  }
  
  render() {
    const filterButtons = this.props.options.map(option =>
      <Button 
        key={option}
        className="filterButtons__button"
        buttonText={option}
        onClick={e => this.handleClick(option, e)} />);
    return (
      <div className="filterButtons">
        <Button className="filterButtons__button" buttonText="All Rockets" onClick={e => this.handleClick('', e)} />
        {filterButtons}
      </div>
    );
  }
}
export default FilterButtons;
