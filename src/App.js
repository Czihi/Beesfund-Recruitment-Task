import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Main from "./components/Main";



class App extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);

    }
    state={
        err: true,
        events: "",
    };

    getData=()=>{
    const API="https://dev.bfund.ovh/api/events/1197"
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error("Couldn't connect to API")
            })
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => ({
                    err: false,
                    events: data
                }))
            })
            .catch(err => {
                console.log(err);
                this.setState(prevState => ({
                    err: true,
                    events: ""
                }))
            });
};




    render() {
        window.addEventListener('load', this.getData);
        return (
            <Router>
                <Route path="/Beesfund-Recruitment-Task" exact render={
                    () => {
                        document.title = "Upcoming events";
                        return (<div>
                            <Main
                            events={this.state.events}
                            err={this.state.err}
                            />
                        </div>)
                    }
                }/>
            </Router>
        );
    }
}

export default App;
