import logo from './logo.svg';
import './App.css';
import AppComp4 from './AppComp4.js'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import Metallic from './Metallic.js'

function App() {
  //for AppComp3
    var mercury = {
      name: "Mercury",
      freezing: -39,
      boiling: 356
  };

  var sodium = {
      name: "Sodium",
      freezing: 97,
      boiling: 882
  };
  const metals = [mercury, sodium];

  return (
      <Router>
        <div className="App">
          <h1>Hello baby!</h1>
          <div className="content">
          <h2>This is the content</h2>
          <Routes>
            <Route exact path="/"  element={<Home/>}/>
            <Route path="/metals" element={<Metallic/>}/>
            <Route path="/about" element={<About/>}/>
            </Routes>
          </div>

        </div>
           
    </Router>
  );
}

export default App;
