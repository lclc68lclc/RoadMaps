import React, { Component } from 'react';
import { MDBContainer, MDBNavbar, MDBNavItem, MDBNavLink, MDBNavbarBrand, MDBNavbarNav, MDBIcon, MDBTable } from 'mdbreact';
//import api from "../utils/api";
import axios from 'axios';
import StripedTable from "../stripedtable";

class Results extends Component {
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
  axios.get('http://localhost:4000/resultsapi')
    .then((response) => {
    this.setState({results: response.data});
    }).catch((error) => {
      console.log(error);
    })
}

render() {
  return (
      <MDBContainer>
          <div>
      <MDBNavbar color="danger-color" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand>
            <strong>Roadmaps</strong>
          </MDBNavbarBrand>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="!#">
                  <MDBIcon fab icon="facebook-f" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="!#">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="!#">
                  <MDBIcon fab icon="instagram" />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </div>

    <div>
      <MDBContainer>
        <div>
            <h1>Below are ten jobs we think you should be able to do:</h1>
            </div>
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
      </MDBContainer>
</div>
</MDBContainer>
    );
  }
}

export default Results;