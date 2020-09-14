import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';
import Counter from './counter';
import TextBox from './TextBox';

class App extends Component {
  constructor(){
    super();
    this.state={
      count:100
    }
  }
  handleClick =()=> {
    console.log("Clicked");
    this.setState({count:this.state.count+1})
  }
  render() {
    return (
      <div className="App">
        <TextBox/>
    </div>
  );
 }
}

export default App;
