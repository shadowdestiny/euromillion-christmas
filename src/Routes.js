import React from 'react';
import {Route, Switch} from 'react-router-dom';

// ---
import App from './component/App';
//import Home from './pages/Home';
import ChristmasLotery from './pages/ChristmasLotery';

import Page404 from './component/global/error/Page404';

import {Provider} from 'react-redux';
import store from './store/store';
import { CookiesProvider } from 'react-cookie';

const AppRoutes = () =>

    <Provider store={store} >
        <CookiesProvider>
            <App>
                <Switch>
                    <Route exact path={`/`} component={ChristmasLotery}/>
                    <Route exact path={`/christmaslotery`} component={ChristmasLotery}/>
                    <Route component={Page404}/>
                </Switch>
            </App>
        </CookiesProvider>
    </Provider>;

export default AppRoutes;