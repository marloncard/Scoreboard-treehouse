import React from 'react';


export default class Counter extends React.Component {
  
    state = {
        score: 0
    };
    // prevState is recommended for updating a state from a previous state
    incrementScore() {
      this.setState( prevState => ({
        score: prevState.score + 1
      }));
    }
  
    decrementScore() {
      this.setState( prevState => ({
        score: prevState.score - 1
      }));
    }
  
   
    render () {
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
          <span className="counter-score">{ this.state.score }</span>
          <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
        </div>
      );
    }
  }