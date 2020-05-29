import React , { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class newEmployee extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedRecord : props.selectedRecord,

        }
    }

    render(){
        return <div>
            Here Comes Your Employee Popup.
        </div>
    }

}

export default newEmployee