import React, { Component } from 'react';

import './App.css';
import Tally from './Table/Tally'




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
  district : [],
  
};
  }

async componentDidMount(){
  const url="https://api.covid19india.org/state_district_wise.json";
  const responce = await fetch(url);
   const data =  await responce.json();
  this.setState({district: Object.entries(data.Maharashtra.districtData)});
  //console.log(Object.entries(this.state.district));
  //const city =Object.entries(this.state.district); 
  //let mymap = new Map();
  //for(let i=0;i<city.length;i++){
    //  console.log(city[i][0]);
     // mymap.set(city[i][0],city[i][1].confirmed)
 // }//
console.log(this.state.district);

}
render(){
  return(
  
    <div >
    <table>
        <tr>
            <th>sr no</th>
            <th>District</th>
            <th>Confirmed</th>
        </tr>
    
        {this.state.district.map((list,index) =>
      (
          <tr>
            <td>{index=index+1}</td>
        <td> {list[0]}</td> <td>{list[1].confirmed}</td>
    
        </tr>
        
      
      ))}
    
  
  </table>
  <Tally></Tally>
  </div>);

}

}
export default App;
