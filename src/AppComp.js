import React from 'react';
import  Metal from './Metal.js'

class AppComp extends React.Component {
 

    constructor(props) {
        super(props)
        console.log(this.props)
        console.log(this.props.name)


    }

    
    
    

    render() {

        

        return <React.Fragment>
        {
            <Metal></Metal>                                                                                                                                                                                                                        
        }
        </React.Fragment>

    };
}

export default AppComp;