import React from 'react';

import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }
class MetalDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log("props is " + JSON.stringify(this.props));
        console.log("router is " + JSON.stringify(this.props.router));
        console.log("params is " + JSON.stringify(this.props.router.params));
        this.state = {
            id: this.props.router.params.id
        }
    }

    render() {

        console.log("data is " + this.props.data);
        const metals = this.props.data;
        
        const metal = metals.filter(metal => {
            console.log("metal neutral is is " + JSON.stringify(metal))
            if (metal.id == this.state.id) {
                return metal;
            }
        });
        console.log("metal 0 is " + JSON.stringify(metal))
        return (<h1>{metal[0].name}</h1>);
    }
}

export default withRouter(MetalDetail);