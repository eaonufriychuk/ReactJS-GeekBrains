import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';


import Main from './layout/Main';
import Index from './pages/Index';
import Blog from './pages/Blog';
import Comments from './pages/Comments';

ReactDom.render(
    <BrowserRouter history={ browserHistory }>
        <Route component={ Main }>
            <Route path="/" component={ Index }/>
            <Route path="blog/" component={ Blog }/>
            <Route path="comments/" component={ Comments }/>
        </Route>
    </BrowserRouter>
    , document.getElementById('main'));