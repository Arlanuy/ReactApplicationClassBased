import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.others)
    }

    foundProfile() {
        var foundProfile = true;

        return foundProfile === true ? "Found profile": "Not found"
    }


    render() {

        
        return <React.Fragment>   
        {
        [
        this.foundProfile(),
        this.props.others.map((detail) => {return <li key={detail.person}>{detail.person + " " + detail.career + " " + detail.love}</li>} )
        ]
        }
        </React.Fragment>
    };
}

export default Profile;