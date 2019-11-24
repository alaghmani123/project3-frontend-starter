import React from 'react';
import './App.css';
import Login from '../src/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'
const databaseUrl = 'https://project3-backend-test.herokuapp.com'

class App extends React.Component {
//   constructor(props) {
//     super(props);
//   //   this.handleSuccessfulAuth =this.handleSuccessfulAuth.bind(this);
// }
//   // handleSuccessfulAuth(data) {
//   //   this.props.handleLogin(data);
//   //   this.props.history.push("/decks");
  render() {
    return (
      <Router>
      <div className="App" >
        <header className="App-header">
          <h1 className="title">DECKSTER</h1>
          <div className="signin">
            <Login/>
            <button className="regSubmit" type="submit" ><Link to="/registration">Register Now!</Link></button>
          </div>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
