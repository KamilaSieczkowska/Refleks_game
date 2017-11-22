import React from 'react';
import {Footer} from './footer.jsx';


class Timer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            time: 10,
            isPaused: this.props.isPaused
        }
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

    render(){
        return (
            <p className="timer">Czas: <span id="timer">00:{this.state.time < 10 ? '0'+this.state.time : this.state.time}</span></p>
        )
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

    componentDidMount(){
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.counter);
    }
}

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
            <p className="points">Punkty: <span id="points">{this.state.opponentPoints}:{this.state.userPoints}</span></p>
        )
    }
}

class YourCart extends React.Component {

    render(){
        console.log(this.props.userImages)

        let cartImages = this.props.userImages.map((el,index)=> {
            
            return (
                <div className={`image img${index+1}`} key={index+1}>
                    <img onClick={e => this.props.handleUserPoints(e)} src={`../images/${el}`} alt={`${el}`} />
                </div>
                
            )
        })

        return (
            <div className="cart user__cart">

                {cartImages}
        
                <p>Twoja karta</p>
            </div>
        )

    }
}

class OpponentCart extends React.Component {
    render(){

        let opponentCartImages = this.props.opponentImages.map((el,index)=> {
            
            return (
                <div className={`image img${index+1}`} key={index+1}>
                    <img src={`../images/${el}`} alt={`${el}`} />
                </div>
            )
        })


        return (
            <div className="cart opponent__cart">
                
                {opponentCartImages}
            
            </div>
        )
    }
}


class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isPaused: false,
            resetTime: false,
            opponentPoints: 0,
            userPoints: 0,
            images: ['bear.png', 'bird.png', 'bolid.png', 'bottle.png', 'cat.png', 'crown.png', 'disc.png', 'duck.png', 'earth.png', 'food.png', 'fork.png', 'frankie.png', 'fries.png', 'frog.png', 'girl.png', 'hat.png', 'ostrich.png', 'scissors.png', 'spaceship.png', 'star.png', 'tree.png', 'vader.png']
        }
    }

    handlePause = () => {
        this.setState({
            isPaused: !this.state.isPaused
        })  
    }

    handleOpponentPoints = () => {
        this.setState({
            opponentPoints:  this.state.opponentPoints + 1
        })
    }

    handleUserPoints = (e) => {
        
        
        this.setState({
            userPoints: this.state.userPoints + 1,
            resetTime: true
        })
    }

    shuffle = (arr) => {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };

    render() {

        let shuffleTab = this.shuffle(this.state.images);
        let userImages = shuffleTab.slice(0,8);
        let opponentImages = shuffleTab.slice(7,15);

        console.log(userImages, opponentImages)

        return (
            <div>
                <div className="background__game">
                    <div className="container_game">
                        <div className="game">
                            <div className="game_info">
                                <Timer isPaused={this.state.isPaused}
                                    resetTime={this.state.resetTime}
                                    handleOpponentPoints={this.handleOpponentPoints}/>  
                                    
                                <Points opponentPoints={this.state.opponentPoints}
                                    userPoints={this.state.userPoints}
                                    handleUserPoints={this.handleUserPoints}/>

                            </div>
                
                            <YourCart userImages={userImages}
                                handleUserPoints={this.handleUserPoints}/>
                            <OpponentCart opponentImages={opponentImages}/>
                        
                            
                            <div className="btn_box_pause">
                                <a onClick={this.handlePause} className="btn_pause">Pauza</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export {Game}