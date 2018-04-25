import * as React from "react"
import '../styles/Button.sass';
import PropTypes from 'prop-types';

class Button extends React.Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
  }
  
  render() {
    
    const { buttonText } = this.props;
    
    return (
      <button>
        { buttonText }
      </button>
      );
  }
}

export default Button