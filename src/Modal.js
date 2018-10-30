import React, { Component } from "react";
//import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      styles: {
        header: {
          width: "100%",
          height: "10vh",
          background: "#ccc",
          color: "black",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        body: {
          width: "80vw",
          padding: "10%",
          height: "70vh",
          margin: "auto",
          background: "white",
          color: "black",
          textAlign: "center"
        },
        footer: {
          width: "100%",
          height: "10vh",
          background: "#aaa",
          color: "black",
          textAlign: "center"
        }
      }
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: !this.state.open });
  }

  render() {
    return this.props.open ? (
      <div className="modal-container">
        {this.props.render({
          ...this.state,
          handleChange: this.handleChange
        })}
      </div>
    ) : null;
  }
}
export default Modal;
