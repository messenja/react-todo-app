const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          editable: false,
        },
      ];

    case 'UPDATE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text, editable: false } : todo
      );

    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'EDIT_TODO':
      return state.map((todo) => (todo.id === action.id ? { ...todo, editable: true } : todo));

    case 'DELETE_TODO':
      return state.filter((todo) => {
        return todo.id !== action.id;
      });

    default:
      return state;
  }
};

export default todos;
