import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropzone from "react-dropzone";
import request from "superagent";

class App extends Component {

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    let req = request.post("http://localhost:4000/upload");
    acceptedFiles.forEach(file => {
      req.attach(file.name, file);
    });
    req.end((err, res) => {
      if(err) {
        console.log("Error:", err);
      } else {
        console.log(res);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Dropzone onDrop={this.onDrop.bind(this)}></Dropzone>
      </div>
    );
  }
}

export default App;
