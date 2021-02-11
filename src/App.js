import React from 'react'
import MovieContainer from './containers/MovieContainer'

class App extends React.Component {



  render() {
    return (
      <div className="App">
        <header>
          <h1>WHAT SHOULD I WATCH TONIGHT?</h1>
        </header>
        <MovieContainer />
      </div>
    );
  }
}

export default App;
