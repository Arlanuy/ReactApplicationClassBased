import React from 'react';

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

class Metal extends React.Component {

    constructor(props) {
        super(props);
        
        this.state= {
            currentTemp: null,
            metals: [mercury, sodium]
        };

        this.setTemperature = this.setTemperature.bind(this);
    }

    setTemperature2  = (e) => {
        this.setState({currentTemp: e.target.value})
        console.log(this.state.currentTemp);
    }

    setTemperature(e) {
        this.setState({currentTemp: e.target.value})
        console.log(this.state.currentTemp);
    }



    render() {
        return (
        this.state.metals.map((metal) => { 
            return <li key={metal.name}>{(<div>
                <input type="text" value={this.state.currentTemp} onChange={this.setTemperature}></input>
                <p>{this.state.currentTemp}</p>           

            </div>)} </li>;
        })    
        
        )
            
    }
}

export default Metal;