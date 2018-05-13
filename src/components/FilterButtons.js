import * as React from 'react';
import Button from './Button';

class FilterButtons extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const filterButtons = this.props.options.map(option =>
            <Button className="filterButtons__button" buttonText={option} />)
    return(
      <div className="filterButtons">
        <Button className="filterButtons__button" buttonText="All Rockets" />
        {filterButtons}
      </div>
      );
  }
}
export default FilterButtons;
