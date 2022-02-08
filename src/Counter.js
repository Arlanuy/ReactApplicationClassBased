import React from 'react';

export default class Counter extends React.Component {
    
    
    state = {
        count: 0,
        username:this.props.name 
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
        this.props.update("Technician");
    }

    render() {
        return (
            <>
                <h1>Hey {this.state.username} the count is </h1>
                <h1>Count:{this.state.count} </h1>
                <button onClick={this.handleClick}> Click to increment</button>
            </>
        )
    }
}