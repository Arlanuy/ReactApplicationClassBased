import React from 'react';

class Temp extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.metal

    }

    currentTemp = () => {
        this.setState({...this.state, currentTemp:400})
    }

    componentWillMount() {
        this.currentTemp();
    }
                    
    render () {   

        var stateOfMatter;
        
        console.log("state is " + this.state.currentTemp);
        if (this.state.currentTemp <= this.props.metal.freezing) {
            stateOfMatter = "solid";
        }

        else if (this.state.currentTemp >= this.props.metal.boiling) {
            stateOfMatter = "gas";
        }

        else {
            stateOfMatter = "LIQUID";
        }
        
        return (
                
                <p>At {this.state.currentTemp} This {this.state.name} is considered to be a {''} {stateOfMatter} with symbol {this.props.symbol}</p>
        );
    }

    
}

Temp.defaultProps={
    symbol: "N/A"
}

export default Temp;                                                                                                                                                                          