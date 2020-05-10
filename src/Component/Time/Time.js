
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
            <div>

            <div className="w3-bar w3-mobile w3-border w3-small w3-blue  " style={{height:"100%"}}>
            <h6 className='w3-bar-item'>Covid19-tracker</h6>
            <h6 className='w3-bar-item w3-right'>{this.state.time}</h6>
            
            
            </div>
            <div className="w3-bar w3-mobile w3-small">
            <button onClick={() =>this.props.onBuclick('news')}className ='  w3-button w3-round-large w3-margin-left w3-margin-top w3-blue w3-hover-red'>News</button>
            <button onClick={() =>this.props.onBuclick('india')}className ='w3-button w3-round-large w3-margin-left w3-margin-top w3-blue w3-hover-red'>India</button>
            <button onClick={() =>this.props.onBuclick('maharashtra')}className ='w3-button w3-round-large w3-margin-top w3-margin-left w3-blue w3-hover-red'>Maharashtra</button>
            </div>
            </div>
        )}
}

export default Time;