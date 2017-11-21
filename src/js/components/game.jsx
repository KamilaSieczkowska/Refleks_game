import React from 'react';
import {Footer} from './footer.jsx';

class YourCart extends React.Component {
    render(){
        return (
            <div className="cart user__cart">
                <div className="image img1" id="img1">
                    <img src="../images/bear.png" alt="obrazek"/>
                </div>
                <div className="image img2" id="img2">
                    <img src="../images/bottle.png" alt="obrazek"/>
                </div>
                <div className="image img3" id="img3">
                    <img src="../images/crown.png" alt="obrazek"/>
                </div>
                <div className="image img4" id="img4">
                    <img src="../images/disc.png" alt="obrazek"/>
                </div>
                <div className="image img5" id="img5">
                    <img src="../images/duck.png" alt="obrazek"/>
                </div>
                <div className="image img6" id="img6">
                    <img src="../images/vader.png" alt="obrazek"/>
                </div>
                <div className="image img7" id="img7">
                    <img src="../images/star.png" alt="obrazek"/>
                </div>
                <div className="image img8" id="img8">
                    <img src="../images/fries.png" alt="obrazek"/>
                </div>
        
                <p>Twoja karta</p>
            </div>
        )

    }
}

class OpponentCart extends React.Component {
    render(){
        return (
            <div className="cart opponent__cart">
                <div className="image img1" id="img1">
                    <img src="../images/frankie.png" alt="obrazek"/>
                </div>
                <div className="image img2" id="img2">
                    <img src="../images/bird.png" alt="obrazek"/>
                </div>
                <div className="image img3" id="img3">
                    <img src="../images/cat.png" alt="obrazek"/>
                </div>
                <div className="image img4" id="img4">
                    <img src="../images/earth.png" alt="obrazek"/>
                </div>
                <div className="image img5" id="img5">
                    <img src="../images/girl.png" alt="obrazek"/>
                </div>
                <div className="image img6" id="img6">
                    <img src="../images/ostrich.png" alt="obrazek"/>
                </div>
                <div className="image img7" id="img7">
                    <img src="../images/fork.png" alt="obrazek"/>
                </div>
                    <div className="image img8" id="img8">
                <img src="../images/bear.png" alt="obrazek"/>
                </div>
            </div>
        )
    }
}


class Game extends React.Component {
    

    render() {
        return (
            <div>
                <div className="background__game">
        <div className="container_game">
            <div className="game">
                <div className="game_info">
                    <p className="timer">Czas: <span id="timer">00:10</span></p>  
                         
                    <p className="points">Punkty: <span id="points">0:0</span></p>
                </div>
                
                <YourCart />
                <OpponentCart />
              
                
                <div className="btn_box_pause">
                    <a href="#" className="btn_next">Następna karta</a>
                    <a href="#" className="btn_pause">Pauza</a>
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