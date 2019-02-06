import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

const TeamPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow>
            <MDBCol lg="6" md="6" className="mb-lg-0 mb-5">
            <img src="https://f6s-public.s3.amazonaws.com/profiles/2145132_th1.jpg" className="rounded-circle" height="150px" alt="" />
              <h5 className="font-weight-bold mt-4 mb-3">Rhonda Williams</h5>
              <p className="text-uppercase red-text">CEO</p>
              <p className="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="red-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="red-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="red-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="6" md="6" className="mb-lg-0 mb-5">
            <img
                      src="https://avatars3.githubusercontent.com/u/2266560?s=460&v=4"
                      className="rounded-circle" height="150px"
                      alt=""
                    />
              <h5 className="font-weight-bold mt-4 mb-3">Willina Clark</h5>
              <p className="text-uppercase red-text">Web Developer/CTO</p>
              <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="red-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="red-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default TeamPage;