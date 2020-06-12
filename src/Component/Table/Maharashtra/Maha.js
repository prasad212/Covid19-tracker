import React, { Component } from 'react'

class Maha extends Component {
    constructor(){
      super()
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
    
      <div>
      <h4>Maharashtra</h4>
      <table className='w3-table-all w3-tiny w3-round-small w3-bordered w3-margin-top'>
          <tr>
              <th>sr no</th>
              <th>District</th>
              <th>Confirmed</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deaths</th>
          </tr>
      
          {this.state.district.map((list,index) =>
        (     
     
            <tr>
            <td>{index=index+1}</td>
            <td>  {list[0]}</td>
            <td>{list[1].confirmed}</td>
            <td>{list[1].active}</td>
            <td>{list[1].recovered}</td>
            <td>{list[1].deceased}</td>
            </tr>
          

        
        ))}
      
    
    </table>
    </div>
    );
  }
  
  }
  
  export default Maha;
  