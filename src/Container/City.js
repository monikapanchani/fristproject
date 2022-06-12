import React, { Component } from 'react';

class City extends Component {

    constructor(props){
        super(props);

        this.state = {
            CityName : 'surat'
        }
    }

    ChangeCity = () => {
        this.setState({
            CityName : 'Ahmdabad'
        })
    }

    render() {
        return (
            <div>
               <h4>Class Base Component</h4> 
               <p>{this.state.CityName}</p>
               <button onClick = { () => this.ChangeCity()}>Change City</button>
                <p>{this.props.id}</p>
            </div>
        );
    }
}

export default City;