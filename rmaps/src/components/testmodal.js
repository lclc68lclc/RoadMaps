import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

class TestModal extends Component {

  constructor(props){
    super(props);

    this.onChangeIndustry = this.onChangeIndustry.bind(this);
    this.onChangeLifestyle = this.onChangeLifestyle.bind(this);
    this.onChangeNeighborhood = this.onChangeNeighborhood.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      neighborhood: '',
      lifestyle: '',
      industry: '',
      modal: false
    };
  }


  onChangeNeighborhood(e) {
    this.setState({
      neighborhood: e.target.value
    });
  }

  onChangeLifestyle(e) {
    this.setState({
      lifestyle: e.target.value
    });
  }

  onChangeIndustry(e) {
    this.setState({
      industry: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`neighborhood: ${this.state.neighborhood}`);
    console.log(`lifestyle: ${this.state.lifestyle}`);
    console.log(`industry: ${this.state.industry}`);

    this.setState({
        neighborhood: '',
        lifestyle: '',
        industry: ''
    });
  }

  render() {
    return (
      <MDBContainer>
      <MDBBtn outline color="white" onClick={this.toggle}>Take the lifestyle test</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Lifestyle Test</MDBModalHeader>
        <MDBModalBody>
        <form onSubmit={this.onSubmit}>
            <select className="browser-default custom-select" value={this.state.neighborhood}
                onInput={this.onChangeNeighborhood}>
                <option>Where do you want to live?</option>
                <option value="fulton">Atlanta</option>
                <option value="dekalb">Decatur</option>
                <option value="gwinnett">Duluth</option>
                <option value="cobb">Marrietta</option>
                <option value="henry">Stockbridge</option>
            </select>
            <select className="browser-default custom-select" value={this.state.lifestyle}
                  onInput={this.onChangeLifestyle}>
                <option>How do you want to live?</option>
                <option value="comfortable" icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg">A Comfortable Life</option>
                <option value="good">The Good Life</option>
                <option value="best">My Best Life</option>
            </select>
            <select className="browser-default custom-select" value={this.state.career}
                onInput={this.onChangeCareer}>
                <option>What do you want to do?</option>
                <option value="help">Help People</option>
                <option value="hands">With My Hands</option>
                <option value="stem">In STEM</option>
                <option value="business">Making Boss Moves</option>
            </select>
           </form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="red" onClick={this.toggle}>Sumbit</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      </MDBContainer>
    )
  }
}

export default TestModal;