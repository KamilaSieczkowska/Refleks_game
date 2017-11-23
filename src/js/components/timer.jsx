import React from 'react';


class Timer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            time: 10,
            isPaused: this.props.isPaused
        }
    }

    startTimer = () => {
        this.counter = setInterval(()=> {
            
            if(!this.state.isPaused){
                this.setState({
                    time: this.state.time - 1
                })
                if(this.state.time <= 0){
                    clearInterval(this.counter)
                    this.props.handleOpponentPoints();
                } 
            }
        },1000)
    }

    render(){
        return (
            <p className="timer">Czas do końca rundy: <br></br> 
                <span id="timer">00:{this.state.time < 10 ? '0'+this.state.time : this.state.time}</span>
            </p>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isPaused: nextProps.isPaused
        })

        if(nextProps.resetTime){
            clearInterval(this.counter);
            this.setState({
                time: 10
            })
            this.startTimer();
        }
    }

    componentDidMount(){
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.counter);
    }
}

export {Timer}