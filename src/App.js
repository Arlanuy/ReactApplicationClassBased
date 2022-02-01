import logo from './logo.svg';
import './App.css';
import AppComp4 from './AppComp4.js'

import {BrowserRouter as Router, Route, Routes, Link, Nav} from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import Metallic from './Metallic.js'
import Metals from './Metals.js'
import MetalDetail from './MetalDetail.js'

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

  var data=[{id: 1, name: "Mercury"}, {id: 2, name: "Sodium"}]

  const metals = [mercury, sodium];

  var letterStyle= {
    padding: 10,
    margin: 10,
    backgroundColor: "#ffde00",
    color: "#333",
    display: "inline-block",
    fontSize: "32",
    textAlign: "center"
  };

  return (
      <Router>
        <div className="App">
          <h1>Hello baby!</h1>
          <div className="content">
          <h2>This is the content</h2>
          <div>
           <nav className="navbar navbar-default">
             <div className="container-fluid">
                <div classname="navbar-header">
                  <a className="navbar-brand" href="/home" style={letterStyle}>Metals</a>
                </div>
                <div>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/metals">Metals</Link></li>
                    <li><Link to="/metals2">Metals Details</Link></li>
                    <li><Link to="/about">About</Link></li>
                  </ul>
                </div>
              </div>      
            </nav>
          </div>
          
          <Routes>
            <Route exact path="/"  element={<Home/>}/>
            <Route path="/metals" element={<Metallic/>} />
            <Route exact path="/metals2" element={<Metals data={data}/>} />
            <Route exact path="/metals2/:id" element={<MetalDetail data={data}/>} />
            <Route path="/about" element={<About/>}/>

            </Routes>
          </div> 

        </div>
           
    </Router>
  );
}

export default App;
