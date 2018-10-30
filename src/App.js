import React, { Component } from "react";
import logo from "./logo.svg";
import Modal from "./Modal";
import "./App.css";

class App extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button name="open" onClick={this.handleOpen}>
            Open Modal
          </button>
        </header>
        <Modal
          open={this.state.open}
          render={props => {
            return (
              <div>
                {/** Header gets it's style from props*/}
                <div style={props.styles.header}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                </div>
                {/** 
                  Here I define the way I want my 
                  my body to look, but get my styles from the renderProp
                */}
                <div style={props.styles.body}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis odio voluptatibus possimus et? Impedit
                  consectetur assumenda iste corrupti magnam repudiandae illum
                  quod, corporis harum consequatur odit, dolorem, officia
                  repellat recusandae. Blanditiis deserunt rem repudiandae earum
                  iste possimus reprehenderit mollitia, neque iusto iure, eaque
                  labore doloribus accusamus quam necessitatibus recusandae,
                  quia voluptas nobis odit quasi architecto porro veniam!
                  Architecto, corporis quasi. Dolorum obcaecati repellendus vel
                  nemo modi ad nihil, eos temporibus voluptas atque enim
                  voluptate. Soluta ipsum hic corporis fugit quae animi velit
                  quisquam dicta, neque quia commodi numquam itaque assumenda?
                </div>
                {/** 
                  Same with footer, but I define functionality. RenderProp only defines
                  whether it is shown and how it looks.
                */}
                <div style={props.styles.footer}>
                  <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inve
                  </div>
                  <button name="open" onClick={this.handleOpen}>
                    Cancel
                  </button>
                  <button name="open" onClick={this.handleOpen}>
                    Submit
                  </button>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
