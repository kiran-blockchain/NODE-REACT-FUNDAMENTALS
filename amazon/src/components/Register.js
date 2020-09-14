//State based component
import React, { Component } from 'react';
//import asyncRequest from 'async-request';
import axios from 'axios'
export class Register extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            email: "",
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            country: "",
            agreeTerms: "",
            countryList: [],
        }
    }
    async componentDidMount() {
        //Any external Api calls at the time of loading we shoudl do here..
        // fetch("https://restcountries.eu/rest/v2/all").then(result => {
        //     console.log(result);
        //     return result.json();
        // }).catch(err => {
        //     console.log(err)
        // }).then(finalResult=>{
        //     console.log(finalResult);
        // })
        let countryList = await axios("https://restcountries.eu/rest/v2/all");
        console.log(countryList);
        this.setState({ countryList: countryList.data });
    }


handleChange = (e) => {
    let currentState = this.state;

    if (e.target.name == 'agreeTerms') {
        console.log(e.target.checked);
        currentState[e.target.name] = e.target.checked;
    }
    else {
        currentState[e.target.name] = e.target.value;
    }
    this.setState(currentState);
    console.log(this.state);
}
bindDataToDropdown = () => {
    return this.state.countryList.map((item, index) => {
        return <option value={item.alpha2Code}>{item.name}</option>
    });
}
render() {
    return <div>
        <div className="form-group row">
            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">User Name</label>
            <div className="col-sm-10">
                <input type="email" className="form-control form-control-sm"
                    name="userName"
                    id="userName" placeholder="Username"
                    onChange={this.handleChange} />
            </div>
        </div>
        <div className="form-group row">
            <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="email" className="form-control form-control-sm"
                    name="email"
                    id="email" placeholder="Email"
                    onChange={this.handleChange} />

            </div>
        </div>
        <div className="form-group row">
            <label for="colFormLabel" className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
                <input type="text" className="form-control form-control-sm"
                    name="firstName"
                    id="firstName" placeholder="col-form-label-sm"
                    onChange={this.handleChange} />

            </div>
        </div>
        <div className="form-group row">
            <label for="colFormLabel" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
                <input type="text" className="form-control form-control-sm"
                    name="lastName"
                    id="lastName" placeholder="col-form-label-sm" />
            </div>
        </div>
        <div className="form-group row">
            <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="text" className="form-control form-control-sm"
                    name="age"
                    id="age" placeholder="Age" onChange={this.handleChange} />
            </div>
        </div>
        <div className="form-group row">
            <label for="countryList" className="col-sm-2 col-form-label">Country List</label>
            <div className="col-sm-10">
                <select className="form-control" name="country" id="countryList" onChange={this.handleChange}>
                    {this.bindDataToDropdown()}
                </select>
            </div>
        </div>
        <div className="form-group row">
            <label for="colFormLabel" className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-10">
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="gender1" name="gender" className="custom-control-input"
                        value="M"
                        onChange={this.handleChange} />
                    <label className="custom-control-label" for="gender1">Male</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        value="F"
                        id="gender2" name="gender" className="custom-control-input" onChange={this.handleChange} />
                    <label className="custom-control-label" for="gender2">Female</label>
                </div>
            </div>
        </div>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1" name="agreeTerms" onChange={this.handleChange} />
            <label class="custom-control-label" for="customCheck1">I Agree Terms</label>
        </div>

    </div>
}
}