import * as React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
  }
  
  render() {
    
    const { buttonText , link, className="button" } = this.props;
    
    return (
      <a href={link} className={className}>
        { buttonText }
      </a>
    );
  }
}

export default Button;
