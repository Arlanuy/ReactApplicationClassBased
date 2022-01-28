import logo from './logo.svg';
import './App.css';
import AppComp3 from './AppComp3.js'

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
    <div className="App">
      <AppComp3 metals = {metals}></AppComp3>
    </div>
  );
}

export default App;
