import React from 'react';
import './App.css';

 class App extends React.Component {
  constructor(props) {
    super(props)
    this.top = 50;
    this.left = 50;

    this.state = {
      sqX: this.top,
      sqY: this.left,
    }

    this.styleApp = {
      width: "100%",
      height: "500px",
      border : "1px solid black",
      position: "relative",
    }
  }

  onMouseMove = (e) => {
    this.setState({
      sqX: -e.clientX/1000 + this.top,
      sqY: -e.clientY/100 + this.left,
    })
  }

  render() {
    this.styleSquare = {
      width: "110%",
      height: "110vh",
      backgroundColor: "black",
      position: "absolute",
      top: `${this.state.sqY}%`,
      left: `${this.state.sqX}%`,
      transform: "translate(-50%, -50%)",
      backgroundImage: "url('/img/image.jpg')",
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }
    return (
      <div className="App" style={this.styleApp} onMouseMove={this.onMouseMove}>
        <div className="square" style={this.styleSquare}></div>
      </div>
    );
  }
}
export default App;
