import React from 'react';
import {Footer} from './footer.jsx';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';



class Loser extends React.Component {

    render() {
        return (
            <div>
                <div className="background__gameover">
                    <div className="container_gameover">
                        <div className="game_gameover">
                            <h1 className="lose_title"> Przegrałeś :( </h1>
                            <p className="gameover_subtitle">Wygląda na to, że musisz jeszcze poćwiczyć.</p>
                        </div>
                        <div className="btn_box_again">
                            <button onClick={this.props.playAgain} className="btn_again">Jeszcze raz</button>
                        </div>
                    
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export {Loser}