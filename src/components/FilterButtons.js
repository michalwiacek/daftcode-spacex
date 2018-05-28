import * as React from 'react';
import Button from './Button';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';

@inject('MainStore')
@observer
class FilterButtons extends React.Component {
  @action.bound
  handleClick(value, event) {
    const {MainStore} = this.props;
    MainStore.setFilter(value);
  }
  render() {
    const { rocketNames } = this.props.MainStore;
    const filterButtons = rocketNames.map(option =>
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
