import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBTable } from 'mdbreact';
//import api from "../utils/api";
import axios from 'axios';
import StripedTable from "./stripedtable";

class ResultsModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      modal: false
    }
  }

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

componentDidMount() {
  axios.get('http://localhost:4000/results')
    .then((response) => {
    this.setState({results: response.data});
    }).catch((error) => {
      console.log(error);
    })
}

render() {
  return (
      <MDBContainer>
      <MDBBtn outline color="white" onClick={this.toggle}>Results</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Lifestyle Test</MDBModalHeader>
        <MDBModalBody>
            <h1>Below are ten jobs we think you should be able to do:</h1>
            <MDBTable striped>
              <tr>
                <th>Job Title</th>
                <th>Education Needed</th>
                <th>Earning Potential</th>
              </tr>
            {this.state.results.map(result =>(
              <StripedTable key={result}
              header={result.title}
              title={result.OccupationalTitle}
              education={result.EducationNeeded}
              salary={result.AvgAnnualWage}
              />
            ))}
          </MDBTable>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="red" onClick={this.toggle}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      </MDBContainer>
    );
  }
}

export default ResultsModal;