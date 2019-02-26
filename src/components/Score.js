import React, { Component } from 'react';


class Score extends Component {
   
    // get ClassName=()=>
    // if score<80
    // ConstantSourceNode.good

    scoreColor(score){
     let scorecolor=""
        if(score>=80){
        scorecolor="high-score"
        }else{
          if(score>=50){
            scorecolor="medium-score"
          }else{
            if(score<50){
              scorecolor="low-score"
            }
          }
        }
       return scorecolor
      }

    render() {
        let color=this.scoreColor(this.props.score)
        console.log(color)
        return (<div class={color}>the score is: {this.props.score}</div>)
    }
}

export default Score