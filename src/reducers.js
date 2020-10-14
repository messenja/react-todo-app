import { combineReducers } from 'redux'
import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO, VisibilityFilters } from './actions'

function todoReducer(state = [], action) {  
  switch(action.type) {
    case ADD_TODO:      
      return ([...state, {text: action.text, completed: false}])
    
    case TOGGLE_TODO:
      return(state.map((todo, index) => {
        if (index === action.index) {
          return ({
            text: todo.text,
            complited: !todo.complited
          })
        }
        return todo
      }))

      default:
        return state
  }
}

function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:    
      return(action.filter)
    default:
      return state
  }
}

const appReducer = combineReducers({
  todoReducer,
  visibilityFilterReducer
})

export default appReducer