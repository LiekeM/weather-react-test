import logo from "./logo.svg";
import "./App.css";

import Weather from "./Weather";
import Icon from "./Icon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi there React</h1>
        <Weather city="Amsterdam" />
        <Icon icon="CLEAR_DAY" color="plum" size={100} />
      </header>
    </div>
  );
}

export default App;
