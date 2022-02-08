import React from 'react'
import Hello from './Hello.js'

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <Hello >
          <li>Node1</li> 
          <h4>Node2</h4>

        </Hello>
      </div>
    )
    }
}

export default App;
