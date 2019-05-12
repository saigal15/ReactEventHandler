import React, {Component} from 'react';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    title: 'App Title'
    }
    this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
title: 'App Tittle'
  });
}
render(){
  return(
<div className = "App">
<h1>{this.state.title}</h1>
<div onClick = {this.onClick}>Click here</div>
</div>
  );
}
}

export default App;
