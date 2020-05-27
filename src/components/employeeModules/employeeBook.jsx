import React , { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import TableStructure from '../common/tableStructure';


class employeeBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            contentRows : [],
            filteredRows : [],
            searchedEmployee : '',
            selectedEmployee : ''
        }
    }

    componentDidMount(){
        this.createTableData();
        let employeeData = [
            {id : 1 , name : 'Employee 1' , Designation : 'Waiter 1' , LeaveBalance : 10},
            {id : 2 , name : 'Employee 2' , Designation : 'Waiter 2' , LeaveBalance : 10},
            {id : 3 , name : 'Employee 3' , Designation : 'Waiter 3' , LeaveBalance : 10},
            {id : 4 , name : 'Employee 4' , Designation : 'Waiter 4' , LeaveBalance : 10},
            {id : 5 , name : 'Employee 5' , Designation : 'Waiter 5' , LeaveBalance : 10},
            {id : 6 , name : 'Employee 6' , Designation : 'Waiter 6' , LeaveBalance : 10}
        ]
        this.createTableData(employeeData);
    }

    createData = (ID , Name , Designation , LeaveBalance) => {
        return {ID , Name , Designation , LeaveBalance};
    }

    createTableData = (employeeData) => {
        let contentRows = [];
        if(employeeData && employeeData.length > 0){
            employeeData.map(data => {
                contentRows.push(this.createData(
                    data.id,
                    data.name,
                    data.Designation,
                    data.LeaveBalance
                ))
            })
        }
        this.setState({contentRows : contentRows , filteredRows : contentRows})
    }

    filterTable(Employee){
        let contentRows = this.state.contentRows;
        let filteredRows = Employee ? contentRows.filter(e => (e.ID === Employee.ID)) : contentRows;
        this.setState({
            filteredRows : filteredRows
        })
    }

    setSearchedEmployee(searched){
        this.setState({
            searchedEmployee : searched
        })
    }

    render(){
        var headerRows = [
            {id : 'ID' , label : 'Employee ID' , field : 'ID' , width : '5%'},
            {id : 'Name' , label : 'Employee Name' , field : 'Name' , width : '15%'},
            {id : 'Designation' , label : 'Designation' , field : 'Designation' , width : '15%'},
            {id : 'LeaveBalance' , label : 'LeaveBalance' , field : 'LeaveBalance' , width : '5%'}
        
        ];
        let filteredContent = this.state.filteredRows;
        return <div className = 'employeeBook-container'>
            <div className='flexDisplay floatRight'>
            <Autocomplete
                id="searchOrAddEmployee"
                clearOnBlur = {false}
                options={this.state.contentRows}
                getOptionLabel={(option) => option.Name}
                style={{ width: 300 }}
                tagSizeSmall = {true}
                value = {this.state.selectedEmployee}
                onChange={(event, newValue) => {
                    this.filterTable(newValue);
                }}
                inputValue = {this.state.searchedEmployee}
                onInputChange = {(event , newInputValue) => {
                    this.setSearchedEmployee(newInputValue);
                }}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />
            <div className = "padding-all"/>
            <button>Add New Employee</button>
            </div>
            <div className = "padding-all"/>
            <TableStructure headerRows = {headerRows} contentRows = {this.state.filteredRows}/>
        </div>
    }

}

export default employeeBook