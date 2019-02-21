import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBBtn, } from
"mdbreact";
import TestModal from "./testmodal";


const CarouselPage = () => {
  return (
    //<MDBContainer>
      <MDBCarousel activeItem={1} length={3} showControls={false} showIndicators={true}>
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
            <MDBMask className="d-flex w-100 justify-content-center align-items-center gradient">
      <MDBContainer>
        <MDBRow>
          <div className="text-white text-center col-md-12 mt-xl-12 mb-12">
            <h1 className="h1-responsive font-weight-bold mt-sm-5">
              Find your income pathway and live the life you desire
            </h1>
            <hr className="hr-light col-md-6" />
            <h6 className="mb-4">
            Take the lifestyle test and see your earning potential.
            </h6>
          </div>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView className="view2">
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer>
        <MDBRow>
          <div className="text-white text-center col-md-12 mt-xl-5 mb-5">
            <h1 className="h1-responsive font-weight-bold mt-sm-5">
            RoadMap$ helps students, millennials and career shifters find career and training options
            </h1>
            <hr className="hr-light col-md-6" />
            <h6 className="mb-4">
            that actually helps to produce the income and lifestyle they desire.
            </h6>
          </div>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
    </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView className="view3">
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer>
        <MDBRow>
          <div className=" text-white text-center col-md-12 mt-xl-12 mb-12">
            <h1 className="h1-responsive font-weight-bold mt-sm-5">
              Get moving in the right direction with RoadMap$
            </h1>
            <hr className="hr-light col-md-6" />
            <h6 className="mb-4">
            Avoid becoming another victim of the student loan crisis or becoming underemployed.
            </h6>
          </div>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
            </MDBView>
           
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    //</MDBContainer>
  );
}

export default CarouselPage;