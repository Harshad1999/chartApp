import React from 'react';
import {StatusBar, Dimensions} from 'react-native';
import Dashboard from './src/components/Dashboard';
import {Provider} from 'react-redux';
import store from './src/redux/store';
// import Orientation from 'react-native-orientation-locker';

export const screenWidth = Dimensions.get('window').width;
const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar />
        <Dashboard />
      </Provider>
    </>
  );
};

export default App;
