import React from 'react';
import AppNumber from './components/checkNumber';
import {Provider} from 'react-redux';
import store from './store/configStore';

const AppCheckNumber = () => {
  return(
    <>
      <Provider store={store}>
        <AppNumber/>
      </Provider>
    </>
  )
}
export default AppCheckNumber;