import React, { Component } from 'react';
// import CountryFun from './CountryFun';

class Country extends Component {

    constructor(props){
        super(props);

        this.state = {
            CountryName : 'india'
        }

    }

    ChangeCountry = () => {
        this.setState({
            CountryName : 'us'
        })
    }

    render() {
        return (
            <div>
               {/* <h4>Class Base Component Country</h4> 
               <p>{this.state.CountryName}</p>
               <button onClick = { () => this.ChangeCountry()}>Change Country</button> */}
               <p>{this.props.place_name}</p>
            </div>
        );
    }
}

export default Country;

