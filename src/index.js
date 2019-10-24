import './index.css';
import React from 'react'
import {render} from 'react-dom'
import Screen from "./containers/screen";
import {Provider} from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

render(
  <Provider store={store}>
    <Screen/>
  </Provider>
  ,
  document.getElementById('root')
);
