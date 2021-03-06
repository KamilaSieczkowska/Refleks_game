import React from 'react';
import {Footer} from './footer.jsx';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';



class Instruction extends React.Component {
    

    render() {
        return (
            <div>
                <div className="background">
                    <div className="container__info">
                        <div className="info__cnt">
                            <h1 className="info__title">Zasady gry</h1>
                            <h4 className="info__description ">Siemka, fajnie, że wpadłeś zmarnować trochę życia. Gra jest prosta, jak znasz Dobble, to jesteś w domu. Gramy w "studnię".</h4>
                            <p><span>1.</span> Na "stole" leży karta z 8 obrazkami. Na Twojej karcie też jest 8 obrazków.</p>
                            <p><span>2.</span><strong> Twoim zadaniem jest znaleźć obrazek wspólny dla obu kart</strong> - tak, jest zawsze. I tak, tylko jeden.</p>
                            <p><span>3.</span> Na znalezienie obrazka <strong>masz 5 sekund</strong> - zdążysz, dostajesz punkt, nie zdążysz - punkt dla komputera.</p>
                            <p><span>4.</span> Obrazek, który się powtarza zaznaczasz klikając na niego na swojej karcie. Proste. Gramy do 20 punktów.</p>
                            <div className="btn__box">
                                <Link to="/game"><span className="btn__play"> Graj </span></Link>
                            </div>
                        </div>
                    </div>
                </div>

            
                <Footer />
            </div>
        )
    }
}

export {Instruction}