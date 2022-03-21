import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css';
import PostForm from './component/PostForm/PostForm';
import Posts from './component/Posts/Posts';
import store from './store'
class App extends Component {
  render(){
    return (
      <Provider store ={store}>
         <div className="App">
        <header className="App-header">
        </header>
        <PostForm />
        <hr />
        <Posts />
        
      </div>
      </Provider>
     
    );
  }
  
}

export default App;
