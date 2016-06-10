// THIS FILE IS USED FOR TESTING

// Node Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Components
import ReactUMD, { Button } from '../index.js'

export class App extends Component {
  onClick () {
    alert('hello');
  }

  render () {
    return (
      <main>
        React App
        <Button onClick={this.onClick} text={"hello"} />
      </main>
    )
  }
}

// App entry point
ReactDOM.render( <App /> , document.getElementById( 'app' ) )
