import { isEmptyObject } from 'jquery';
import React from 'react';
import Counter from './Counter.js';
export default class Hello extends React.Component {
    state = {
        technology: ""
    }

    updateTech = (tech) => {
        this.setState({technology: tech});
    }

    selectTech = (tech) => {
        this.setState({technology: "React"});
    }

    render() {
        let name = "Tom";
        let isValid = true;

        var employees = [
            {name: "Arlan", class: "Eng1"}
        ];

    

        return (
            <>
                {this.props.children}
                <input value={this.state.tech} onClick={() => this.setState({technology: "Angular"})}></input>
                <Counter update={this.updateTech} name={name}/>
                {isValid ?
                    <>
                    <p className='heading' style={{color: 'red', backgroundColor: 'GrayText'}}>
                        Welcome to React Learning!
                        <div className = "table-responsive">
                        <table className="table table-bordered table-hover table-striped">
                            {
                            employees.map((empp) => {
                                return (
                                <tr>
                                    <th>{empp.name}</th>
                                    <th>{empp.class}</th>
                                    <th>{this.state.technology}</th>
                                </tr> )
                            })
                            }
                        </table>
                        <button onClick={this.selectTech}>Click to select technology</button>
                        </div>
                    </p>
                    </> 
                    :
                    "Not valid"   
                }
            </>
        )
    }
}