import React, { Component } from 'react';
import './App.scss';
import axios from 'axios'
import ContactList from './components/ContactList'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import AddContact from "./components/AddContact";
import ContactPage from "./components/ContactPage";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getFriends,deleteFriendById} from './utils/FriendAPI'
import Loader from 'react-loader'
class App extends Component {
    constructor(){
        super()
        this.state = {
            friends:  null
        }
    }
  componentDidMount() {
      axios.get("http://localhost:5000/friends")
      .then(res => {
          console.log('res.data', res.data)
          this.setState({friends:  res.data})
          return res.data
      })
  }
    
    onAddContact(hash){
      console.log(hash)
    }
  
  render() {
    return (
      <div className="App">
         <h1>FrienAds Portal</h1>
          <Link to="/add">
              <button>Add Friend</button>
          </Link>
          <Route path="/add" render={navProps => {
              return (<AddContact onAddContact={this.onAddContact} />)}
          }/>
          <Route path="/" render={navProps => {
              return (<ContactList {...navProps } friends={this.state.friends}/>)}
          }/>
        
          <Route path="/friends/:id" render={navProps => {
              return (<ContactPage {...navProps } friends={this.state.friends}/>)}
          }/>
      </div>
    );
  }
}

export default App;
