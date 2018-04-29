import * as React from "react"
//import '../styles/Button.sass';
import PropTypes from 'prop-types';

class Button extends React.Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
  }
  
  render() {
    
    const { buttonText , link } = this.props;
    
    return (
      <a href={link} className="button">
        { buttonText }
      </a>
      );
  }
}

export default Button