import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component{

    render(){
        console.log(this.props.letterStatus)
       let letters=Object.keys(this.props.letterStatus)
return (
    
         letters.map(letter=> this.props.letterStatus[letter]?
         <span  className="choosen"><Letter letter={letter} selectLetter={this.props.selectLetter}/></span>:
         <span  className="unChoosen"><Letter className="unchoosen" letter={letter} selectLetter={this.props.selectLetter}/></span>  )
)
    }
}

export default Letters