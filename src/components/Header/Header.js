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
    this.getSlackCode = this.getSlackCode.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  getSlackCode() {
    window.location = 'https://slack.com/oauth/authorize?scope=identity.basic&client_id=432579980291.906710749733'
  }
 
  handleSignOut() {
    fetch('/logout')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.handleLogout();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  menuRender() {
    let deviceWidth = window.innerWidth;
    if (deviceWidth < 500) {
      return (
        <MhButton handleClick={this.props.handleClick}
          isClicked={this.props.isClicked}></MhButton>
      );
    } else if (!this.props.isAuthenticated) {
      return (
        <>
          <div className="headerLogo">
            <Link to="/">
              <img src={logo} alt="Create Private Channels" />
            </Link>
          </div>
          <div className="headerMenu">
            <ul>
              <li>
                <Link to="user" onClick={this.getSlackCode}>
                  <img src="https://api.slack.com/img/sign_in_with_slack.png" alt="Slack Sign In" />
                </Link>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="headerLogo">
            <Link to="/user">
              <img src={logo} alt="Create Private Channels" />
            </Link>
          </div>
          <div className="headerMenu">
            <ul>
              <li>
                <Link to="/" onClick={this.handleSignOut}>
                  SignOut
              </Link>
              </li>
            </ul>
          </div>
        </>
      );
    }

  }

  render() {
    return (
      <>
        <div className="headerContainer">
          {this.menuRender()}
        </div>

      </>
    );
  }
}

export default withRouter(Header);


