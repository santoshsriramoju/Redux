import React from 'react';
import './App.css';
import Counter from './counter/counter'
import store from './store/index';


 class App extends React.Component {
  render() {
    return (
      <div>
        <Counter store={store}/>
      </div>
    )
  }
}


export default App;