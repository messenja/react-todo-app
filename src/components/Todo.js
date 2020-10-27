import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, onDeleteClick, onEditClick, completed, text }) => (
  <div>
    <div>
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {text}
      </li>
    </div>
    <div>
      <button
        style={{
          marginLeft: '4px',
        }}
        onClick={onEditClick}
      >
        Edit
      </button>
      <button
        style={{
          marginLeft: '4px',
        }}
        onClick={onDeleteClick}
      >
        Delete
      </button>
    </div>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
