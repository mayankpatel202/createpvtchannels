import React from 'react';
import { Switch, Route, withRouter, useHistory } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import User from './components/User/User';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMhButton: false,
      isAuthenticated: false,
      username: ''
    }
    this.handleMobileHeaderButtonClick = this.handleMobileHeaderButtonClick.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {

    this.handleAuth();

  }
  
  handleLogout() {
    this.setState({
      isAuthenticated: false,
      username: ""
    })
  }

  handleAuth() {
    fetch('/auth')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          isAuthenticated: data.isAuth,
          username: data.username
        }, () => {
          this.props.history.replace('/user');
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleMobileHeaderButtonClick(isClicked) {
    if (isClicked !== this.state.isMhButton) {
      this.setState({
        isMhButton: true
      });
    } else {
      this.setState({
        isMhButton: false
      });
    }
  }


  render() {
    return (
      <>
        <Header
          handleClick={this.handleMobileHeaderButtonClick}
          isClicked={this.state.isMhButton}
          isAuthenticated={this.state.isAuthenticated}
          handleLogout={this.handleLogout}></Header>
        <Switch>
          <PrivateRoute path="/user" isAuthenticated={this.state.isAuthenticated}>
            <User name={this.state.username}></User>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </>
    );
  }

}

export default withRouter(App);
