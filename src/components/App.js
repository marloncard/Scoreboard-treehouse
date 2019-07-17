import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


export default class App extends Component {
  
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  }

  // player id counter
  prevPlayerId = 4;

  // prevState is recommended for updating a state from a previous state
  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
        ]
      }
    })
  }

  // Takes player id as a parameter; uses setState to call prevState as callback
  // which uses a filter to create a new list omitting the the player with current id
  handleRemovePlayer = (id) => {
    this.setState( prevState => ({
      players: prevState.players.filter( p => p.id !== id )
    }));
  }
  
  render() {
   return (
     <div className="scoreboard">
        <Header score
          title="My Scoreboard" 
          players={this.state.players}
          />
     
        {/* Players List
        map callback takes an optional index parameter that contains the index
        of the current item being processed in the array */
        }
       
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer = {this.handleRemovePlayer}
          />
          )}

          <AddPlayerForm 
            addPlayer={this.handleAddPlayer}
          />
  
     </div>
   )
  }
}
