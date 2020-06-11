import React from 'react';
import AppCounter from './components/index';
import store from './store/configStore';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppCounter/>
      </Provider>
    </>
  )
}
export default App;