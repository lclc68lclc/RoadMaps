import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBAnimation } from "mdbreact";
import img from "./Home/rmaprun1.jpeg";

const BlogPage = () => {
  return (
    <MDBContainer>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
                <img
                  src={img}
                  alt=""
                />
                <MDBMask overlay="black-strong" className="flex-center" />
              <MDBAnimation reveal type="slideInRight">
              <MDBCardBody cascade className="text-center">
              <h2>Not interested in a 4-yrs career path?</h2>

              <p>Get on the “fast-track”! With RoadMap$ you can quickly see in-demand “fast-track” 
                careers paying the income you need to live the lifestyle you desire.
              </p>
              </MDBCardBody>
              </MDBAnimation>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBContainer>
  );
}

export default BlogPage;