import React from 'react';
import { Link } from 'react-router-dom';
import './MhButton.css'

class MhButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleMHBClick = this.handleMHBClick.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  handleMHBClick() {
    let menuContainer = document.getElementsByClassName('MhbMenuContainer')[0];
    if (this.props.isClicked) {
      menuContainer.classList.remove('MhbMenuContainer');
      menuContainer.classList.add('MhbMenuContainerClose');
      setTimeout(() => {
        this.props.handleClick(true);
      }, 100)
    } else {
      if (menuContainer) {
        menuContainer.classList.remove('MhbMenuContainerClose');
        menuContainer.classList.add('MhbMenuContainer');
      }
      this.props.handleClick(true);
    }

  }

  renderMenu() {
    return (
      <div className="MhbMenuContainer">
        <div className="headerMenu" >
          <ul>
            <li>
              <Link to="/auth">
                <img src="https://api.slack.com/img/sign_in_with_slack.png" alt="Slack Sign In Button" />
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