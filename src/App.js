import logo from './logo.svg';
import './App.css';
import AppComp4 from './AppComp4.js'
import {Nav, Navbar, NavItem} from 'react-bootstrap';

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import Metallic from './Metallic.js'
import Metals from './Metals.js'
import MetalDetail from './MetalDetail.js'
import Card from './Card.js'

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

  return (
      <Router>
        <div className="App">
          <h1>Hello baby!</h1>
          <div className="content">
          <h2>This is the content</h2>
          <div>


          <Link to="/">Home</Link>

          <NavItem><Link to="/metals">Metals</Link></NavItem>
          <NavItem><Link to="/metals2">Metals Details</Link></NavItem>
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem><Link to="/card">Card</Link></NavItem>



          </div>
          <Routes>
            <Route exact path="/"  element={<Home/>}/>
            <Route exact path="/card"  element={<Card/>}/>
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
