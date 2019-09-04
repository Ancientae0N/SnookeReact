import React, { Component } from 'react'
import logo from './logo.svg';
import snooker from './snooker.gif';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Axios from 'axios';
import './App.css';

export default class App extends Component {
  enterstats = () => {
    const toSend = {stats: "This was the best day ever!"}
    Axios({
      
      method :'post',
      url: 'http://127.0.0.1:5000/enterstats',
      data : toSend,
      config: {headers : {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin': '*'}}
    }).then( response => {
      console.log(response)
    })
}

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={snooker}  alt="logo" />
        <br/>
        <h1 className = 'snooker'>
          SnookeReact
        </h1>
        <Divider/>
      <p>
        <Fab color="secondary" aria-label="edit" onClick = {this.enterstats} >
        <EditIcon/>
        </Fab>
        &nbsp; &nbsp; &nbsp;
        <Button variant="contained" color="primary"  >
        View stats
      </Button>
      </p>
          
        
      </header>
    </div>
  );
}
}


