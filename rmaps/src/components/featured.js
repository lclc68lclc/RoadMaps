import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
  return (
    <section className="my-4">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why RoadMap$?
        </h2>
        
        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="graduation-cap"
                  size="2x"
                  className="red-text"
                />
              </MDBCol>
              <MDBCol size="10">
              <h5>Education</h5>
                <p className="grey-text">
                  Every year more students graduate and aren't able to find work that will allow them
                  to thrive.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="file-invoice-dollar" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol size="10">
              <h5>Debt</h5>
                <p className="grey-text">
                  Every second the student loan debt crisis increases.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="hand-holding-usd" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5>Wealth</h5>
                <p className="grey-text">
                  Every year more and more Americans fall into the wealth gap.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
              alt=""
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="road" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol size="10">
              <h5>Career</h5>
                <p className="grey-text">
                  RoadMap$ is designed to help you find targeted career and training options
                  that yield a desired income and lifestyle.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="bolt" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5>Training</h5>
                <p className="grey-text">
                With RoadMap$ you’ll see upfront how career and training choices playout financially in real-time.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="hand-holding-usd" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol size="10">
              <h5>Resources</h5>
                <p className="grey-text">
                  Trusted resources to help you manage, multiply and maximize your income & lifestyle.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;