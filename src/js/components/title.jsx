import React from 'react';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import {Footer} from './footer.jsx';



class Main extends React.Component {
    

    render() {
        return (
            <div>
                <div className="background">
                    <div className="container">
                        <div className="intro">
                            <h1>
                                R
                                <span className="e">e</span>
                                <span className="f">f</span>
                                <span className="l">l</span>
                                <span className="e">e</span>
                                <span className="k">k</span>
                                <span className="s">s</span>
                            </h1>
                            <p>... zmarnuj trochę czasu!</p>
                            <div className="btn__box">
                                <Link to="/instruction"><span className="button btn__info"> Zasady gry </span></Link>
                                <Link to="/game"><span className="button btn__start"> Graj </span></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export {Main}