import logo from "./logo.svg";
import React from  "react";
import "./App.css";
import web3 from "./web3";
import lottery from "./lottery";
import { Component } from "react";

class App extends React.Component{

  /* old version hook
  constructor(pros){
    super(pros);
    this.state = {
      manager : '',
      //這個其實就是物件導向的建構子+Field宣告而已@"@
    }
  }
  */

  // new version hook after 2016
  state = {
    manager : '',
    players : [],
    balance : '',
    value   : '',
    message : '',
  };

  async componentDidMount(){
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayer().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({manager,players,balance});
  }

  onSubmit = async(event) =>{
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({message:'交易處理中請稍後'})
    await lottery.methods.join().send({
      from : accounts[0],
      value : web3.utils.toWei(this.state.value, 'ether')

    })
    this.setState({message:'交易完成!'})
  }

  onClick = async () =>{
    const accounts = await web3.eth.getAccounts();
    this.setState({message : '交易處理中請稍後'})
    await lottery.methods.pickWinnder().send({
      from: accounts[0]
    })
    this.setState({message : '交易完成!'})

  }


  render(){
  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>合約管理員是 {this.state.manager} <br />
        目前有{this.state.players.length}位玩家在此合約<br />
        幸運兒將會獲得{web3.utils.fromWei(this.state.balance,"ether")} 個乙太幣!!
      </p>
    <hr />
    <form onSubmit={this.onSubmit}>
      <h4>試試手氣?!</h4>
      <div>
        <label>輸入要投入的金額</label>
        <input 
          value={this.state.value}
          onChange={(event)=>{this.setState({value:event.target.value})}}

        />
      </div>
      <button>Enter</button>
    </form>
    <hr />
    <h1>{this.state.message}</h1>
    <hr />
    <h4 >幸運兒即將出爐</h4>
    <button onClick={this.onClick}>開獎</button>


    </div>


  );
  }
  
}

export default App;
