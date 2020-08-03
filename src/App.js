import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/Beesfund-Recruitment-Task" exact render={
                    () => {
                        document.title = "Upcoming events";
                        return (<div>
                            <Main/>
                        </div>)
                    }
                }/>
            </Router>
        );
    }
}

export default App;
