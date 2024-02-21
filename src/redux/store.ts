import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '.';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
});

export default store;
