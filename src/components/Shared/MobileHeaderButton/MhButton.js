import React from 'react';
import { Link } from 'react-router-dom';
import './MhButton.css'

class MhButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleMHBClick = this.handleMHBClick.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleMHBClick(e) {
    if (this.props.isClicked) {
      let menuContainer = document.getElementsByClassName('MhbMenuContainer')[0];
      menuContainer.style.animation = 'down 0.5s linear reverse backwards'
    }
    setTimeout(() => {
      this.props.handleClick(true);
    }, 100)

  }

  handleAuth() {
    this.handleMHBClick();
  }

  renderMenu() {
    return (
      <div className="MhbMenuContainer">
        <div className="mhbMenu" >
          <ul>
            <li >
              <Link to="/slackLogin" onClick={this.handleAuth}>
                <img src="https://api.slack.com/img/sign_in_with_slack.png" alt="Slack Sign In" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="MhbContainer" onClick={this.handleMHBClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {this.props.isClicked ? this.renderMenu() : null}
      </>
    );
  }
}

export default MhButton;