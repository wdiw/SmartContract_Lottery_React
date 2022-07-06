import logo from "./logo.svg";
import "./App.css";
import web3 from "./web3";
import lottery from "./lottery";
import { Component } from "react";

class App extends Component{
  constructor(pros){
    super(pros);
    this.state = {
      manager : '',
      //這個其實就是物件導向的建構子+Field宣告而已@"@
    }
  }
  
  async componentDidMount(){
    const manager = await lottery.methods.manager().call();
    this.setState({manager});
  }


  render(){
  
  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This Contract is managered by {this.state.manager}</p>

    </div>
  );
  }
  
}

export default App;
