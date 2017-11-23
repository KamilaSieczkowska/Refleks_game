import React from 'react';
import {Main} from './title.jsx';
import {Instruction} from './instruction.jsx';
import {Game} from './game.jsx';
// import {NotFound} from './notFound.jsx';

import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

class Routing extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return  <Router history={hashHistory}>
            <Route path='/' component={Main}/>
            <Route path='/instruction' component={Instruction}/>
            <Route path='/game' component={Game}/>
            

        </Router>
    }
}

export {Routing}