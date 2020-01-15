import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMhButton: false,
    }
    this.handleMobileHeaderButtonClick = this.handleMobileHeaderButtonClick.bind(this);
  }
  
  handleMobileHeaderButtonClick(isClicked) {
    if(isClicked !== this.state.isMhButton) {
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
          isClicked={this.state.isMhButton}></Header>
        <Switch>
          <Route path="/"> 
            <Home></Home>
          </Route>
        </Switch>
      </>
    );
  }
  
}

export default App;
