import React, {Component} from 'react';
import { VscDebugRestart } from "react-icons/vsc";
import "./App.css";


class App extends Component{

  state={
    counter:0
    
  }

  changeColor = () =>{
    let displayArea = document.getElementsByClassName("displayState")[0];
    let r=Math.floor((Math.random() * 254) + 1);
    let g=Math.floor((Math.random() * 254) + 1);
    let b=Math.floor((Math.random() * 254) + 1);
    displayArea.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }

  handleState = (e) =>{

      let action = e.target.id;
      let newCounter=this.state.counter;
      let displayArea = document.getElementsByClassName("displayState")[0];
      
      if(action === "increment"){ 
          this.changeColor();
          newCounter++;
      }

      else if( action === "decrement"){
        this.changeColor();
        if(this.state.counter !== 0){
            newCounter--;
        } 
      }

      else if( action === "reset"){
          newCounter=0;
          displayArea.style.backgroundColor = "#ffffff";
      }

      this.setState({
        counter: newCounter
      })

  }

  render(){

    return(
      <div className="App">
        <div className="wrapper"> 
            <div className="displayState">
                {this.state.counter}
            </div>
            <div className="buttonContainer">
              <button id="increment" onClick={this.handleState}>+</button>
              <button id="reset" onClick={this.handleState}><span>< VscDebugRestart/></span></button>
              <button id="decrement" onClick={this.handleState}>-</button>
            </div>
        </div>
      </div>
    )

  }

}


export default App;
