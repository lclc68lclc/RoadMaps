import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import api from "../utils/api";
import axios from 'axios';

class ResultsModal extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
      <MDBContainer>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Lifestyle Test</MDBModalHeader>
        <MDBModalBody>
            <p>You want to live here and work here.</p>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="red" onClick={this.toggle}>Sumbit</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      </MDBContainer>
    );
  }
}

export default ResultsModal;