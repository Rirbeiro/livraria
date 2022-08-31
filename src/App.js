import React from 'react';
import Paths from './routes';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Paths />
    </Provider>
  );
}
export default App;
