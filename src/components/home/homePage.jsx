import React , { Component } from 'react';
import {Route ,  BrowserRouter as Router, Redirect } from 'react-router-dom';

// import SideNavBar from '../sideNavBar/sideNavBar';
import SideNavBar from '../sideNavBar/NavigationBar';
import EmployeeManagement from '../employeeModules/employeeManagement';
import Dashboard from '../dashboard/dashboard';
import EmployeeBook from '../employeeModules/employeeBook';
import Designation from '../employeeModules/designationManagement';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            expanded : false
        }
        this.toggleSideNavBar = this.toggleSideNavBar.bind(this);
    }

    toggleSideNavBar(expanded){
        this.setState({expanded : expanded});
    }

    render(){
        return <div className = "homePage-container">
{/* <section className="welcome">
    <div className="introduction">Hi</div>
</section> */}
<section>
<Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNavBar location = {location} history = {history} expanded = {this.state.expanded} toggleSideNavBar = {this.toggleSideNavBar} />
            <main className={"mainBlock " + (this.state.expanded ? "mainBlockOpen" : "mainBlockClosed")}>
                <Route path="/" render={() => {
                    return (
                        <Redirect to = '/dashboard'/>
                    )
                }} />
                <Route path="/dashboard" component={props => <Dashboard />} />
                <Route exact path="/employeeManagement/employeeBook" component={props => <EmployeeBook />} />
                <Route exact path="/employeeManagement/designationManager" component={props => <Designation />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>
</section>
        </div>;
    }
}

export default Home