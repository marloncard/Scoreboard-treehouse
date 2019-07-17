import React, {Component} from 'react'
import Header from './Header'
import Player from './Player'



export default class App extends Component {
  
  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
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
          totalPlayers={ this.state.players.length } />
     
       {/* Players List*/}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer = {this.handleRemovePlayer}
          />
   )}
  
     </div>
   )
  }
}
