import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
var $ = require('jquery');

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: null,
            Year: null,
            Poster: null,
            Plot: null
        };
        this.fetchData = this.fetchData.bind(this)
    }

    fetchData() {
        Axios.get('http://www.omdbapi.com/?t=the+dark+knight+rises&apikey=36cc7b3d').
        then((response) => {
            console.log("response is " + JSON.stringify(response));
            this.setState({Title: response.data.Title, Year: response.data.Year, Poster: response.data.Poster, Plot: response.data.Plot})
        })
        
    }

    componentWillMount() {
        this.fetchData();
        
    }

    render() {
        console.log("new state is " + JSON.stringify(this.state));
        return (
            <div>
                <img src={this.state.Poster}/>
                <h3>{this.state.Title}</h3>
                <h4>{this.state.Plot}</h4>
            </div>
        )
    }
}

class Main extends React.Component {
    render() {
        
        return (
            <div>
                <Card/>
            </div>
        )
    }
}

export default Main;