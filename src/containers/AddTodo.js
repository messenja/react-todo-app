import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  React.useEffect(() => {
    input.focus();
  }, [input]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          input.focus();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input placeholder="Add todo..." ref={(node) => (input = node)} />
        <button
          type="submit"
          style={{
            marginLeft: '4px',
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
