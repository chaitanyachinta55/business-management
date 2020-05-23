import React , { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';

class tableStructure extends Component{

    constructor(props){
        super(props)
        this.state = {
            headRows : props.headerRows,
            contentRows : props.contentRows,
            page : 0,
            rowsPerPage : 5,
            order : 'asc',
            orderBy : null,
            pagedRecords : []
        }
    }

    static getDerivedStateFomProps(props , state){
        if(props.contentRows !== state.contentRows){
            return (
                {
                    contentRows : props.contentRows,
                    page : 0
                }
            )
        } else {
            return null;
        }
    }

    handleChangePage = (event , newPage) => {
        this.setState({
            page : newPage
        });
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage : event.target.value,
            page : 0
        });
    }

    render(){
        const {headRows , contentRows , page , rowsPerPage , orderBy , order} = this.state;

        return (
            <div>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {headRows.map( header => (
                                <TableCell key = {header.id}
                                    style = {{ width : header.width}}>
                                    <TableSortLabel active = {orderBy === header.id} direction = {order}
                                    //onClick = {() => this.createSortHandler(row.id)}
                                    >
                                        {header.label}
                                    </TableSortLabel>
                                </TableCell>
                            )

                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.contentRows.map((row,contentIndex) => (
                            <TableRow key = {row.field}>
                                {headRows.map((fields , fieldIndex) => (
                                    <TableCell style = {{ width : fields.width}}>
                                        <div>{row[fields.field]}</div>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default tableStructure