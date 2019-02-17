import { Component, RefObject } from "inferno";
import {BrowserRouter as Router, Route, NavLink } from "inferno-router";

let x: string = 'testing';
console.log(x);

const Home = () => (<div><h2>Home</h2></div>);
const About = () => (<div><h2>About</h2></div>);
const Test = () => (<div><h2>Test</h2></div>);

let _i=0;
class App extends Component {
  input: RefObject<HTMLInputElement>;
  
  onClick = () => {
    console.log('INVOKED: '+_i++); // eslint-disable-line no-alert
  };

  render() {
    return (
      <Router>
        <div class="content">
          <h1>Inferno Parcel boilerplate Example</h1>
          <input type="text" value="toto" ref={el => (this.input = el)} />
          <button onClick={this.onClick}>push</button>
          <NavLink exact className="nav-link" to="/"><span class="nav-text">Home</span></NavLink>
          <NavLink className="nav-link" to="/about"><span class="nav-text">About</span></NavLink>
          <NavLink className="nav-link" to="/test"><span class="nav-text">Test</span></NavLink>
        </div>
        <div class="in-content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
