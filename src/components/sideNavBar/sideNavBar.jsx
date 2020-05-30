import React , { Component } from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SideNavBar extends Component{

    render(){
        return <div>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (this.props.location.pathname !== to) {
                        this.props.history.push(to);
                    }
                }}

                expanded={this.props.expanded}
                onToggle={(expanded) => {
                    this.props.toggleSideNavBar(expanded);
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="dashboard">
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <i className="fa fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Dashboard
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="dailyUsageBusiness">
                        <NavIcon>
                            <i className="fa fa-pencil-square-o" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Daily Usage | Business
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="employeeManagement">
                        <NavIcon>
                            <i className="fa fa-users" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Employee Management
                        </NavText>
                        <NavItem eventKey="employeeManagement/employeeBook">
                            <NavText>
                            <i className="fa fa-users" style={{ fontSize: '1.75em' }} />  Employee Book
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="employeeManagement/designationManager">
                            <NavText>
                            <i className="fa fa-sort-amount-desc" style={{ fontSize: '1.75em' }} /> Designation Manager
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="procurementManagement">
                        <NavIcon>
                            <i class="fa fa-shopping-cart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Procurement Management
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="stockManagement">
                        <NavIcon>
                            <i className="fa fa-shopping-bag" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Stock Management
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="financeManagement">
                        <NavIcon>
                            <i className="fa fa-inr" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Finance Management
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>;
    }
}

export default SideNavBar