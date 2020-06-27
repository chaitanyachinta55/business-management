import React , { Component } from 'react';

class NavigationBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            navObject : [{title : "Dashboard" , url : "dashboard"} ,
            {title : "Daily Usage | Business" , url : "dailyUsageBusiness"} ,
            {title : "Employee Management" , url : "employeeManagement"} ,
            {title : "Procurement Management" , url : "procurementManagement"}],
            logo : {title : "Business Management" , logo : ""}
        }
    }
    
    render(){
        return <div className="navContainer">
            <div className="logo">
                <div className="title">{this.state.logo.title}</div>
            </div>
            <div className="navbar">
               {this.state.navObject ? this.state.navObject.map((eachNav) => (
                   <li>{eachNav.title}</li>
               )) : <></>
               } 
            </div>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    }
}

export default NavigationBar