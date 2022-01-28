import logo from './logo.svg';
import './App.css';
import AppComp from './AppComp.js'

function App() {

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
      <AppComp metals = {metals}></AppComp>
    </div>
  );
}

export default App;
