import React from 'react';
import {Timer} from './timer.jsx';
import {Points} from './points.jsx';
import {Pause} from './pause.jsx';
import {UserCard} from './user-card.jsx';
import {OpponentCard} from './opponent-card.jsx';
import {Winner} from './win.jsx';
import {Loser} from './lose.jsx';
import {Footer} from './footer.jsx';


class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isPaused: false,
            resetTime: false,
            opponentPoints: 0,
            userPoints: 0,
            images: ['backpack.png', 'banana.png','bear.png', 'bird.png', 'bolid.png', 'bottle.png', 'boy.png', 'bunny.png', 'car.png', 'carrot.png', 'cat.png', 'disc.png', 'duck.png', 'earth.png', 'fork.png', 'frankie.png', 'fries.png', 'frog.png', 'girl.png', 'hat.png', 'hexagon.png', 'lego.png', 'match.png', 'ostrich.png', 'scissors.png', 'spaceship.png', 'star.png', 'tree.png', 'vader.png'],
            userImages: [],
            opponentImages: []
        }
    }

    handlePause = () => {
        this.setState({
            isPaused: !this.state.isPaused
        })
    }

    handleOpponentPoints = () => {
        this.setState({
            opponentPoints:  this.state.opponentPoints + 1,
            resetTime: true
        })
        this.reloadCards()
    }

    
    handleUserPoints = (e) => {

        if(this.state.opponentImages.indexOf(e.target.getAttribute('alt')) !== -1){

            this.setState({
                userPoints: this.state.userPoints + 1,
                resetTime: true
            })
            this.reloadCards()
        }
        
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



    reloadCards = () => {
        // losuje wspólny element
        let commonImageIndex = Math.floor((Math.random() * 29) + 0);
        
        // znajduje wylosowany obrazek
        let commonImage = this.state.images[commonImageIndex];
        console.log(commonImage);

        //losuje 14 elementów z tablicy głownej, żeby się nie powtarzały z tym wybranym wyżej
        let newImagesTab = [];
        const numberOfImages = 14;
        let randomNumbers = [];
        let i = 0;
        while(i < numberOfImages) {
            let randomElement = Math.floor((Math.random() * 29) + 0);
            if(randomElement !== commonImageIndex && randomNumbers.indexOf(randomElement) === -1 ) {
                newImagesTab.push(this.state.images[randomElement]);
                randomNumbers.push(randomElement);
                i++;
            }
           
        }
        
        //robi dwie tablice
        let newUserImagesTab = newImagesTab.slice(0,7);
        let newOpponentImagesTab = newImagesTab.slice(7,16);
        

        //losuje indexy w tablicach usera i opponenta dla wspólnego obrazka
        let commonAtUserTab = Math.floor((Math.random() * 8) + 0);
        let commonAtOpponentTab = Math.floor((Math.random() * 8) + 0);

        // wstawia wspólny obrazek do tablic
        newUserImagesTab.splice(commonAtUserTab, 0, commonImage);
        newOpponentImagesTab.splice(commonAtOpponentTab, 0, commonImage);

        this.setState({
            userImages: newUserImagesTab,
            opponentImages: newOpponentImagesTab
        })

    }

    playAgain = () => {
        this.setState({
            userPoints: 0,
            opponentPoints: 0,
        })
    }

    componentDidMount(){
        this.reloadCards()
    }


    render() {

        if(this.state.opponentPoints === 10){
            return(
                <Loser playAgain={this.playAgain}/>
            )
        }

        if(this.state.userPoints === 10){
            return(
                <Winner playAgain={this.playAgain}/>
            )
        }

        if(this.state.isPaused){
            return (
                <Pause handlePause={this.handlePause}/>
            )
        }
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
                
                            <UserCard userImages={this.state.userImages}
                                handleUserPoints={this.handleUserPoints}/>

                            <OpponentCard opponentImages={this.state.opponentImages}/>
                        
                            
                            <div className="btn_box_pause">
                                <button onClick={this.handlePause} className="btn_pause">Pauza</button>
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