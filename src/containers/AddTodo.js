import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input = null;

  React.useEffect(() => {
    input.focus();
  }, [input]);

  const setInputRef = (elem) => (input = elem);

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
        <input type="text" placeholder="Add todo..." ref={setInputRef} />
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
