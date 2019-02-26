import React, { Component } from 'react';
import './App.css';
import Score from './components/Score';
import Letters from './components/Letters';
import Solution from './components/Solution';
import EndGame from './components/EndGame'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // gameStatus:Const.Playing/End game component
      letterStatus: this.generateLetterStatuses(),
      solution: { secretWord: "VERA", hint: "your Name" },
      score: 100,
      endGame: false
    }
  }

  selectLetter = (letter) => { //mange letter selection click, outcome.
    let score = 0
    const letterStatus = { ...this.state.letterStatus };
    letterStatus[letter] = true;
    if (this.state.solution.secretWord.includes(letter)) {
      score = +20
    } else {
      score = -20
    }
    this.setState({
      letterStatus: letterStatus,
      "score": this.state.score + score
    })
    
  }

  generateLetterStatuses = () => { //genrate Alphabet letters
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }

    return letterStatus
  }


  render() {

    // if (this.state.score===100){
    //   return(
    //  <EndGame/>)
    // }else{
    return (
  
      <div>

        <h4>Hangman</h4>
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution={this.state.solution} />
        <Letters
          letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
      </div>)
  }
}
// }


export default App;
