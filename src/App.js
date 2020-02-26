import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component{

constructor(){
  super();
  this.signs = ["rock", "paper", "scissors"]
  this.state = {
    playerOne: "rock",
    playerTwo: "scissors",

  }
}

playGame = () => {
  this.setState({
    playerOne: this.signs[Math.floor(Math.random() *3)],
    playerTwo: this.signs[Math.floor(Math.random() *3)],
  })
}

decideWinner = () => {
  const playerOne = this.state.playerOne
  const playerTwo = this.state.playerTwo

    if(this.state.playerTwo == this.signs[0] &&  this.state.playerOne == this.signs[1]){
    this.setState({playerOne})
  }else if(this.state.playerTwo == this.signs[2] && this.state.playerOne == this.signs[1]){
    this.setState({playerTwo})
  }else if(this.state.playerTwo == this.signs[2] && this.state.playerOne == this.signs[0])
    this.setState({playerOne})
}

render(){
  return(
<div className="style">
<div>
<PlayerCard sign={this.state.playerOne}/>
<PlayerCard sign={this.state.playerTwo}/>
</div>
<div className="winner">{this.decideWinner()}</div>
<button type="button" onClick={this.playGame}>Play the game</button>
</div>

  )
}
};



export default Game;
