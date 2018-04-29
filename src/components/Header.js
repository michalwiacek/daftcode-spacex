import * as React from "react"

class Header extends React.PureComponent {

  render() {
    return (
      <header className="Header">
        <button className="Header__go-back-button"><div className="arrow"></div>GO BACK</button>
        <span className="Header__logo"></span>
      </header>
      );
  }
}

export default Header