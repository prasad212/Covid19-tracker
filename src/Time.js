
import moment from "moment"
import React,{ Component } from "react";

class Time extends Component{

    
       render() {
         
        return (
            <div>
       <h1> { moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
       </div>
        )}
}

export default Time;