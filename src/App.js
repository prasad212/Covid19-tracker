import React, { Component } from 'react';

import './App.css';
import Tally from './Table/Tally'
import Maha from './Table/Maha'
import moment from 'moment';
import Time from './Time';
import News from './News/News'




class App extends Component{
  
render(){
  return(
  
    <div >

     <Time></Time>
     <News></News>
  <Maha></Maha>
  <Tally></Tally>
  
  </div>);

}

}
export default App;
