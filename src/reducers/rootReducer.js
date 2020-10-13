import { 
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO, 
  VisibilityFilters 
} from '../actions'

const initialState = {
  VisibilityFilters: VisibilityFilters.SHOW_ALL,
  todos: [
    {
      text: "Do something",
      complited: false
    }
  ]
}

export default function rootReducer(state = initialState, action) {

  switch (action) {

    case SET_VISIBILITY_FILTER:    
      return( {...state, visibilityFilter:action.filters} )

    case ADD_TODO:
      return( {...state, todos:[...state.todos, {text:action.text, complited: false}]} )

    case TOGGLE_TODO:
      return( {...state, todos: state.todos.map((todo, index)=>{
        if (index === action.index) {
          return ({
            text: todo.text,
            complited: !todo.complited
          })
        }
        return todo
      })})
    
    default:
      return state
  }
}