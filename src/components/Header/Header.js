/* eslint-disable no-loop-func */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import MhButton from '../Shared/MobileHeaderButton/MhButton';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.menuRender = this.menuRender.bind(this);
  }


  menuRender() {
    let deviceWidth = window.innerWidth;
    if (deviceWidth < 500) {
      return (
        <MhButton handleClick={this.props.handleClick}
          isClicked={this.props.isClicked}></MhButton>
      );
    } else {
      return (
        <div className="headerMenu">
          <ul>
            <li>
              <Link to="slackLogin">
                <img src="https://api.slack.com/img/sign_in_with_slack.png" alt="Slack Sign In" />
              </Link>
            </li>
          </ul>
        </div>
      );
    }

  }

  render() {
    return (
      <>

        <div className="headerContainer">
          <div className="headerLogo">
            <Link to="/">
              <img src={logo} alt="Create Private Channels" />
            </Link>
          </div>
          {this.menuRender()}
        </div>

      </>
    );
  }
}

export default withRouter(Header);


