import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import TetrisView from "../containers/tetris-view";

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <TetrisView/>
      </Provider>
    )
  }
}
