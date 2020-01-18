import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SlackLogin from './components/SlackLogin/Login';
import User from './components/User/User';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMhButton: false,
    }
    this.handleMobileHeaderButtonClick = this.handleMobileHeaderButtonClick.bind(this);
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
    console.log("Hello")
    return (
      <>
        <Header
          handleClick={this.handleMobileHeaderButtonClick}
          isClicked={this.state.isMhButton}></Header>
        <Switch>
          <Route path="/slackLogin">
            <SlackLogin></SlackLogin>
          </Route>
          <Route path="/auth">
            <User></User>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </>
    );
  }

}

export default withRouter(App);
