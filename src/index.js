import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'

console.log("Initial state:" + store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo('Do something'))
store.dispatch(addTodo('Do something more'))
store.dispatch(addTodo('Another todo...'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

