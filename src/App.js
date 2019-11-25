import React from "react";
import "./App.css";
import axios from "axios";
import Login from "./Login/Login";
import Card from "./Card/Card";
import Registration from "../src/Registration";
import CardList from "./CardList/CardList";
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization:
                    'Client-ID 1db88f456bc1aba6f586b8b35d808a7c87d2c3a518a0bc54fb8bacc4cb8ace79'

            }
        });
       
        this.setState({ images: response.data.results});
        console.log('response')
         
    }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <imageList images={this.state.images} />
     
      <div className="App">
        <header className="App-header">
          <h1>DECKSTER</h1>
          <div className="signin">
            <CardList />
            {/* <Login /> */}
            {/* <Card /> */}
          </div>
        </header>
      </div>
      </div>
    );
  }
}

export default App;