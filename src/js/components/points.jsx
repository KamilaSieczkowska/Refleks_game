import React from 'react';

class Points extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            opponentPoints: 0,
            userPoints: 0,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            opponentPoints: nextProps.opponentPoints,
            userPoints: nextProps.userPoints
        })
    }
  
    render(){
        return(
            <p className="points">Punkty: <br></br> 
                <span id="points">{this.state.opponentPoints}:{this.state.userPoints}</span>
            </p>
        )
    }
}

export {Points}