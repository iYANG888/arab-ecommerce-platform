import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import languageReducer from './features/languageSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    language: languageReducer,
  },
});

export default store;