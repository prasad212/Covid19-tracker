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
    <div>
   
   
     <Time></Time>
     <div className='w3-container w3-cell w3-mobile'>
     <News></News>
     </div>
     <div className='w3-container w3-cell w3-mobile'> 
      <Maha></Maha>
  </div>
    <div className='w3-container w3-cell w3-mobile'>
  <Tally></Tally>
  </div>
  
  
  </div>);

}

}
export default App;
