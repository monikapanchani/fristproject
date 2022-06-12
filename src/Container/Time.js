import React, { Component } from 'react';

class Time extends Component {

    constructor(props){
        super(props);

        this.state = {
            Time : new Date()
        }
    }

        tick = () => {
            this.setState({
                Time : new Date()
            })
        }

        componentDidMount = () => {
            this.TimeI = setInterval( () => this.tick(), 1000);
        }

        componentDidUpdate = (PrevState , PrevProps) => {
            if (this.state.Time !== PrevState.Time) {
              console.log("componentDidUpdate");  
            }
        }

        componentWillUnmount = () => {
            clearInterval (this.TimeI);
        }

    render() {
        return (
            <div>
                <p>
                    {this.state.Time.toLocaleTimeString()}
                </p>
            </div>
        );
    }
}

export default Time;