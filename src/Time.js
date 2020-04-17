
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
            <div className="w3-bar w3-border w3-blue">
                <h3 className="w3-bar-item">Covid19-Tracker</h3>
                     <h3 className='w3-bar-item   w3-right'> { this.state.time}</h3>
       </div>
        )}
}

export default Time;