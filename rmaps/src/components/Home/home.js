import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBIcon } from "mdbreact";
import FeaturesPage from "../featured";
import TeamPage from "../team";
import "./home.css";
import ContactPage from "../contact";
import TestimonialsPage from "../testimonials";
import TestModal from "../testmodal";
import img from "./362.png";
import CarouselPage from "../carousel";
import BlogPage from "../fasttrack";


class Home extends React.Component {
state = {
  collapsed: false
};

handleTogglerClick = () => {
this.setState({
  collapsed: !this.state.collapsed
});
};

render() {
const overlay = (
  <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.handleTogglerClick} />
);
return (
<div id="apppage">
  <Router>
    <div>
      <MDBNavbar color="danger-color" dark expand="md" fixed="top" scrolling transparent>
        <MDBContainer>
          <MDBNavbarBrand>
            <strong>Roadmap$</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.handleTogglerClick} />
          <MDBCollapse isOpen={this.state.collapsed} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">About Us</MDBNavLink>
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
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {this.state.collapsed && overlay}
    </div>
  </Router>
  <CarouselPage/>
  {/*<MDBView>
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer>
        <MDBRow>
          <div className="text-center text-md-left col-md-6 mt-xl-5 mb-5">
            <h1 className="h1-responsive font-weight-bold mt-sm-5">
              Maximize your income to live the life you've dreamed about{" "}
            </h1>
            <hr className="hr-light" />
            <h6 className="mb-4">
            Make a targeted education/training choice to yeild the income and exact lifestyle you've imagined! Know better upfront how your choices pay out financially.
            </h6>
            <TestModal/>
          </div>
          <MDBCol md="6" xl="5" className="mt-xl-5">
            <img src= {img} alt="" className="img-fluid" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
  </MDBView>*/}

  <MDBContainer>
    <MDBRow className="py-3">
      <MDBCol md="12" className="text-center">
        <FeaturesPage/>
      </MDBCol>
    </MDBRow>
  </MDBContainer>

  <MDBContainer>
    <MDBRow className="py-3">
      <MDBCol md="12" className="text-center">
        <BlogPage/>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  

  <MDBContainer>
    <MDBRow className="py-3">
      <MDBCol md="12" className="text-center">
        <TestModal/>
      </MDBCol>
    </MDBRow>
  </MDBContainer>

  
  <MDBContainer>
    <MDBRow className="py-3">
      <MDBCol md="12" className="text-center">
        <TestimonialsPage/>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  

  <MDBContainer>
    <MDBRow className="py-3">
      <MDBCol md="12" className="text-center">
        <TeamPage/>
      </MDBCol>
    </MDBRow>
  </MDBContainer>

  <MDBContainer>
    <MDBRow className="py-5">
      <MDBCol md="12" className="text-center">
      <ContactPage/>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>
);
}
}

export default Home;