import * as React from "react"

class Footer extends React.PureComponent {

  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <span><span className="footer__follow">Follow SpaceX<span className="spacer">|</span></span>
          <ul className="footer__nav">
            <li className="footer__link"><a href="https://twitter.com/SpaceX">Twitter</a></li>
            <li className="footer__link"><a href="https://youtube.com/spacex">Youtube</a></li>
            <li className="footer__link"><a href="https://flickr.com/photos/spacex">Flickr</a></li>
            <li className="footer__link"><a href="https://www.instagram.com/spacex/">Instagram</a></li>
          </ul></span>
          <div className="footer__credit">2018 Space Exploration Technologies CORP.</div>
        </div>
      </footer>
      );
  }
}

export default Footer