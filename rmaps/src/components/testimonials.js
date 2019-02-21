import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBAnimation } from "mdbreact";
import Demo from "./generatednumbers";
import Demo2 from "./generatednumbers2";
import Demo3 from "./generatednumbers3";

const TestimonialsPage = () => {
  return (
    <MDBAnimation reveal type="fadeIn">
    <MDBContainer>
      <section className="text-center my-5">
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBCardBody className="default-color">
                <Demo/>
                <hr />
                <p className="text-white mt-4">
                  The amount of student loans in the United States.
                </p>
                <footer className="blockquote-footer mb-3">Source: <cite title="Source Title">collegedebt.com</cite></footer>
              </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
              <MDBCardBody className="primary-color">
                <Demo2/>
                <hr />
                <p className="text-white mt-4">
                  College graduates that took a job that <b>did not</b> require a degree.
                </p>
                <footer className="blockquote-footer mb-3">Source: <cite title="Source Title">cnbc.com</cite></footer>
              </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
              <MDBCardBody className="secondary-color">
                <Demo3/>
                <hr />
                <p className="text-white mt-4">
                  Career fields that will disappear by 2026.
                </p>
                <footer className="blockquote-footer mb-3">Source: <cite title="Source Title">moneywise.com</cite></footer>
              </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
    </MDBAnimation>
  );
}

export default TestimonialsPage;