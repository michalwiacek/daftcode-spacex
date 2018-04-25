import * as React from "react"
import '../styles/Footer.sass';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="footer-container">
          <ul className="footer-nav">
            <li className="basic"><span className="footer-credit">FOLLOW SPACEX  |</span></li>
            <li className="basic"><a href="https://twitter.com/SpaceX">TWITTER</a></li>
            <li className="basic"><a href="https://youtube.com/spacex">YOUTUBE</a></li>
            <li className="basic"><a href="https://flickr.com/photos/spacex">FLICKR</a></li>
            <li className="basic"><a href="https://www.instagram.com/spacex/">INSTAGRAM</a></li>
          </ul>
          <span className="basic footer-credit">2018 SPACE EXPLORATION TECHNOLOGIES CORP.</span>
        </div>
      </footer>
      );
  }
}

export default Footer