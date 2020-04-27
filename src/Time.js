
import moment from "moment"
import React,{ Component } from "react";

class Time extends Component{
constructor(){
    super();
    this.state ={
        time :'' 
    }
}
    componentDidMount(){
        setInterval(()=>this.tm(),1000);
    }    

    tm(){
        this.setState({time : moment().format('MMMM Do YYYY, h:mm:ss a')});
    

    }
       render() {
         
        return (

            <div className="w3-bar w3-border w3-blue">

                <h3 className="w3-bar-item">Covid19-Tracker</h3>
                        <h3 onClick={() =>this.props.onBuclick('news')}className ='we-bar-item w3-button w3-margin-left w3-left w3-hover-white'>News</h3>
                        <h3 onClick={() =>this.props.onBuclick('india')}className ='we-bar-item w3-button w3-margin-left w3-left w3-hover-white'>India</h3>
                        <h3 onClick={() =>this.props.onBuclick('maharashtra')}className ='we-bar-item w3-button w3-margin-left we-left w3-hover-white'>Maharashtra</h3>
                     <h3 className ='w3-bar-item   w3-right'> { this.state.time}</h3>
             </div>
        )}
}

export default Time;