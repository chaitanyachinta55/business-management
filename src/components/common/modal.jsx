import React , { Component } from 'react';
import { Modal, ModalTitle } from 'react-bootstrap';

class ModalPopUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            showModal : props.showModal,
            title : props.title
        };
    }

    static getDerivedStateFromProps(props , state){
        return({
            showModal : props.showModal,
            title : props.title
        })
    }

    render (){
        return <Modal
            show = {this.state.showModal}
            onHide = {() => this.props.onClose()}
            size = "sm"
            aria-labelledby = "contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {this.state.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {this.props.children}
            </Modal.Body>
        </Modal>
    }

}

export default ModalPopUp