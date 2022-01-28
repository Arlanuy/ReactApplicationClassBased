import React from 'react';
import  Temp from './Temp.js'

class AppComp extends React.Component {
 

    constructor(props) {
        super(props)
        console.log(this.props)
        console.log(this.props.name)


    }

    
    
    

    render() {

        

        return <React.Fragment>
        {
            this.props.metals.map((metal) => { 
                return <li key={metal.name}>{<Temp metal={metal}></Temp>} </li>;
            })                                                                                                                                                                                                                                       
        }
        </React.Fragment>

    };
}

export default AppComp;