import React from 'react';
import {Footer} from './footer.jsx';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';



class Pause extends React.Component {

    render() {
        return (
            <div>
                <div className="background__pause">
                    <div className="container_pause">
                        <div className="game_pause">
                            <h1 className="pause_title"> Gra zatrzymana </h1>
                            <p className="pause_subtitle"> Możesz iść po herbatę, odebrać telefon czy co tam chcesz...</p>
                        </div>
                        <div className="btn_box_resume">
                            <button onClick={this.props.handlePause} className="btn_resume">Wznów</button>
                        </div>
                    
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export {Pause}