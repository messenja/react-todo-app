import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import EditTodo from './EditTodo';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, updateTodo }) => (
  <div className="todo-list">
    <ul>
      {todos.map((todo) =>
        !todo.editable ? (
          <Todo
            key={todo.id}
            onDeleteClick={() => deleteTodo(todo.id)}
            onClick={() => toggleTodo(todo.id)}
            onEditClick={() => editTodo(todo.id)}
            {...todo}
          />
        ) : (
          <EditTodo key={todo.id} {...todo} updateTodo={updateTodo} />
        )
      )}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoList;
