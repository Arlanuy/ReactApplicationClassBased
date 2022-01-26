import React from 'react';
import Profile from './Profile.js'

class AppComp extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        console.log(this.props.name)

        this.state = [{"person": "Arlan",
            career: "Software Engg",
            love: "Single"}, {"person": "CH",
            career: "Software Engg",
            love: "Single"}];
    }

    render() {
        return <h1>Hello World and  <Profile others ={this.state}></Profile>!!</h1>
    };
}

export default AppComp;