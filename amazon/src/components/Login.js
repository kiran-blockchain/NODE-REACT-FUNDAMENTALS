import React,{Component} from 'react';
import Dropdown from './Dropdown';

export class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            username:"Initial Value",
            password:"Initial Password"
        }
    }

    //OnChange Handler Event Binding
    handleInputchange=(e)=>{
        console.log(e.target.value);
        let currentState = this.state;
        currentState[e.target.name]= e.target.value;
        this.setState(currentState);
    }
    render(){
        var someData =["kiran","Rupa","Gowtham"];
        var newData =["India","US","UK"];
        return <div>
            <h1>Login</h1>
            <input type="text" placeholder="User Name" name="username"onChange={this.handleInputchange}/>
            <input type="text" placeholder="Password" name="password" onChange={this.handleInputchange}/>
            <Dropdown list={someData}/>
            <Dropdown list={newData}/>
    <h1>{this.state.username}</h1>
    <h1>{this.state.password}</h1>

        </div>
    }
}