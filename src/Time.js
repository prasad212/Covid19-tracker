
import moment from "moment"
import React,{ Component } from "react";

class Time extends Component{
constructor(props){
    super(props);
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
       <h1> { this.state.time}</h1>
       </div>
        )}
}

export default Time;