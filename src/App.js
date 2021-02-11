import React from 'react'
import MovieContainer from './containers/MovieContainer'

class App extends React.Component {



  render() {
    return (
      <div className="App">
        <header>
          <h1>What Movie Should I Watch Tonight?</h1>
        </header>
        <MovieContainer />
      </div>
    );
  }
}

export default App;
