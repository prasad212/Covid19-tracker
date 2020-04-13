import React, { Component } from 'react'
import './Tally.css'

class Tally extends Component{
    constructor(props){
        super(props)
        this.state={
            status:[]
        }
    }

    async componentDidMount(){
        const url="https://api.covid19india.org/data.json";
        const response =await fetch(url);
        const data =await response.json();
        console.log(data.statewise);
        this.setState({status : Object.entries(data.statewise)});
        //this.setState({status :Object.defineProperties(data.statewise)})
        //console.log(this.state.status);
        console.log(this.state.status[0]);

    }
    render(){
        return(<div>
                <table>
                    <tr>
                        <th>sr no</th>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recoverd</th>
                        <th>Deaths</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Prasad</td>
                            <td>Hello</td>
                        </tr>
                </table>

        </div>);
    }

}
export default Tally;