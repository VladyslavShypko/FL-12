import React, { Component, Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Logo from './components/logo/logo';
import addEditForm from './components/add-edit-form/add-edit-form';
import ListCourses from './components/list-courses/list-courses';

class App extends Component {
    render() {
        return (
            <Router>
            <Fragment>
                <Logo/>
                <Switch>
                    <Route path="/" exact component={ListCourses} />
                    <Route path="/add-edit-form" exact component={addEditForm}/>
                </Switch>
            </Fragment>
            </Router>
        );
    }
}
export default App;