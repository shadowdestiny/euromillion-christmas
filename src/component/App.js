import React, {Component} from 'react';
import PropTypes from 'prop-types';

// ---
import Content from './global/Content';

// ---
import './main.css';
import './main_v2.css';
import './jquery.countdownTimer.css';
import './play.css';
/*import './basic.scss';*/

//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


    static propTypes = {
        children: PropTypes.object.isRequired
    };


    render() {
        const {children} = this.props;
        return (
            <div>
                <Content body={children}/>
            </div>
        );
    }
}

export default App;