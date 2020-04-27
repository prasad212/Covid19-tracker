
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

                <h4 className="w3-bar-item">Covid19-Tracker</h4>
                        <h4 onClick={() =>this.props.onBuclick('news')}className ='w3-bar-item w3-button w3-margin-left  w3-hover-white'>News</h4>
                        <h4 onClick={() =>this.props.onBuclick('india')}className ='w3-bar-item w3-button w3-margin-left  w3-hover-white'>India</h4>
                        <h4 onClick={() =>this.props.onBuclick('maharashtra')}className ='w3-bar-item w3-button w3-margin-left w3-hover-white'>Maharashtra</h4>
                        	<h4 className ='w3-bar-item w3-right'> { this.state.time}</h4>
             </div>
        )}
}

export default Time;