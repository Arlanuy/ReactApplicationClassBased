import React from 'react';
import {Link} from 'react-router-dom';
import MetalDetail from './MetalDetail.js'

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

class Metals extends React.Component {



    render() {
        
       const metals = this.props.data;
       const metalObj = metals.map((metal) => {
           return(<div key = {metal.name}><Link to={"/metals2/"+metal.id}>{metal.name}</Link></div>)
       });
       
       return (<div>
           <h1>Metals Page</h1>
           {metalObj}
           <MetalDetail/>
       </div>)
    }
}

export default Metals;