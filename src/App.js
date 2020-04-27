import React, { Component } from 'react';

import './App.css';
import Tally from './Component/Table/India/India'
import Maha from './Component/Table/Maharashtra/Maha'

import Time from './Component/Time/Time';
import News from './Component/News/News'




class App extends Component{
  constructor(){
    super();
    this.state ={
      route:'news'
    }
  }

  onBuclick = (route)=>{
      this.setState({route:route})
}
render(){
  return(
    <div>
   
    
     <Time onBuclick={this.onBuclick}></Time>
     { this.state.route ==='news' ?
     <div className='w3-container '>
     <News></News>
     </div>
     :
     this.state.route ==='india' ?
       
    <div className='w3-container '>
     <Tally></Tally>
      </div>
     :
     <div className='w3-container'> 
      <Maha></Maha>
  </div>
  
     }
     
  
  
  </div>);

}

}
export default App;
