import React from 'react';

class Metal extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            currentTemp: null
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
        

        return (<div>
                <input type="text" value={this.state.currentTemp} onChange={this.setTemperature}></input>
                <p>{this.state.currentTemp}</p>           

            </div>)

            
    }
}

export default Metal;