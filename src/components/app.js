import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../assets/styles/main.scss';
import Header from './header';
import Footer from './footer';
import Dashboard from './dashboard';
import AddExpense from './addexpense';
import EditExpense from './editexpense';
import Help from './help';
import NotFound from './notfound';



const App = () => (
    <div className="app">
        <Header />
        <Switch>
            <Route exact path="/" component={ Dashboard }/>
            <Route path="/addexpense" component={ AddExpense }/>
            <Route path="/edit/:id" component={ EditExpense }/>
            <Route path="/help" component={ Help }/>
            <Route component={ NotFound } />
        </Switch>
        <Footer />
    </div>
);

export default App;
