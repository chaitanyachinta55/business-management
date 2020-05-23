import React , { Component } from 'react';

import TableStructure from '../common/tableStructure';


class employeeBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            contentRows : []
        }
    }

    componentDidMount(){
        this.createTableData();
    }

    createData = (ID , Name , Designation , LeaveBalance) => {
        return {ID , Name , Designation , LeaveBalance};
    }

    createTableData = () => {
        let contentRows = [
            this.createData(1 , 'Employee 1' , 'Waiter' , 10),
            this.createData(2 , 'Employee 2' , 'Waiter' , 8),
            this.createData(3 , 'Employee 3' , 'Waiter' , 6),
            this.createData(4 , 'Employee 4' , 'Waiter' , 4),
            this.createData(5 , 'Employee 5' , 'Waiter' , 2),
            this.createData(6 , 'Employee 6' , 'Waiter' , 9)
        ]
        this.setState({contentRows : contentRows})
    }

    render(){
        var headerRows = [
            {id : 'ID' , label : 'Employee ID' , field : 'ID' , width : '5%'},
            {id : 'Name' , label : 'Employee Name' , field : 'Name' , width : '15%'},
            {id : 'Designation' , label : 'Designation' , field : 'Designation' , width : '15%'},
            {id : 'LeaveBalance' , label : 'LeaveBalance' , field : 'LeaveBalance' , width : '5%'}
        
        ];
        return <div>
            <TableStructure headerRows = {headerRows} contentRows = {this.state.contentRows}/>
        </div>
    }

}

export default employeeBook