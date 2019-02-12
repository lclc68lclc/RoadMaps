import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

class TestModal extends Component {

  constructor(props){
    super(props);

    this.state = {
      neighborhood: 'Where do you want to live?',
      lifestyle: 'How do you want to live?',
      career: 'What do you want to do?',
      modal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  
  onSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <MDBContainer>
      <MDBBtn outline color="white" onClick={this.toggle}>Take the lifestyle test</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Lifestyle Test</MDBModalHeader>
        <MDBModalBody>
        <form onSubmit={this.onSubmit}>
            <select className="browser-default custom-select" name="neighborhood" value={this.state.neighborhood}
                onChange={this.handleChange}>
                <option>Where do you want to live?</option>
                <option value="fulton">Atlanta</option>
                <option value="dekalb">Decatur</option>
                <option value="gwinnett">Duluth</option>
                <option value="cobb">Marrietta</option>
                <option value="henry">Stockbridge</option>
            </select>
            <select className="browser-default custom-select" name="lifestyle" value={this.state.lifestyle}
                  onInput={this.handleChange}>
                <option>How do you want to live?</option>
                <option value="comfortable" >A Comfortable Life</option>
                <option value="good">The Good Life</option>
                <option value="best">My Best Life</option>
            </select>
            <select className="browser-default custom-select" name="career" value={this.state.career}
                onInput={this.handleChange}>
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