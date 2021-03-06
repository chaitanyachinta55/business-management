import React , { Component } from 'react';
import { Paper } from '@material-ui/core';

var dashboardDB = {
    'Processed Materials' : {
        'Idli Pindi' : '4 KG',
        'Dosa Pindi' : '3 KG',
        'Idli Pindi 2' : '4 KG',
        'Dosa Pindi 2' : '3 KG',
        'Idli Pindi 3' : '4 KG',
        'Dosa Pindi 3' : '3 KG',
        'Idli Pindi 4' : '4 KG',
        'Dosa Pindi 4' : '3 KG',
        'Idli Pindi 5' : '4 KG',
        'Dosa Pindi 5' : '3 KG',
        'Idli Pindi 6' : '4 KG',
        'Dosa Pindi 6' : '3 KG'
    },
    'Raw Materials' : {
        'Idli Ravva' : '10 KG',
        'Mina Pappu' : '8 KG'
    },
    'Employee Count' : {
        'Available' : 20,
        'Absent' : 5,
        'Total Count' : 25
    }
};

class dashboard extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return <div className = "dashboard-container">

            {Object.keys(dashboardDB).map((typeName , typeIndex) => (
                <div className = "flexDisplay top_padding-5px">
                {/* <div className = "HeaderStyle"> <span> {typeName}</span> </div> */}
                <h1>{typeName}</h1>
                <div className = "flexDisplay">
                {Object.keys(dashboardDB[typeName]).map((materialName , materialIndex) => (
                    <>
                    <div className = "padding-all"/>
                    <Paper elevation={5} className = "pageStyle">
                        {/* <div className = "textBody">{materialName}</div> */}
                    <h2>{materialName}</h2>
                    <h3>{dashboardDB[typeName][materialName]}</h3>
                    </Paper>
                    </>
                ))}
                </div>
                
                </div>
            ))
            }

        </div>
    }
}

export default dashboard