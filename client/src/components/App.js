import React, { Component } from 'react';
import Navigation from './Navigation.js';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main className="py-4">
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
