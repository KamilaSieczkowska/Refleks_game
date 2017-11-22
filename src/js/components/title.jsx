import React from 'react';
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
                                <span className="button btn__info"> Zasady gry </span>
                                <span className="button btn__start"> Graj </span>
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