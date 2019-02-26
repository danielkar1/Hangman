import React, { Component } from 'react';
import Letter from './Letter';


class Solution extends Component {

    render() {
        let word = this.props.solution.secretWord.split("")//.secretWord
        // let letters = word.split("")
        console.log(word)
        return (
           
            <div>
                <div>Hint: {this.props.solution.hint}</div>
                {word.map((letter, index) => this.props.letterStatus[letter]? <Letter letter={letter} key={index} />: " _ ")}

            </div>
        )
    }
}

export default Solution
// {this.state.companies.map(c => <Company name={c.name} revenue={c.revenue} />)}