import React from 'react'
import './App.css';
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import IceCreamContainer from './components/IceCreamContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
