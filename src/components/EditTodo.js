import React from 'react';
import PropTypes from 'prop-types';

const EditTodo = ({ updateTodo, text, id }) => {
  let input = null;

  React.useEffect(() => {
    input.focus();
  }, [input]);

  const setInputRef = (elem) => (input = elem);

  return (
    <div style={{ border: '1px solid black', padding: '5px' }}>
      <li>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            input.focus();
            updateTodo(id, input.value);
          }}
        >
          <input type="text" defaultValue={text} ref={setInputRef} />
          <button
            type="submit"
            style={{
              marginLeft: '4px',
            }}
          >
            Update
          </button>
        </form>
      </li>
    </div>
  );
};

EditTodo.propTypes = {
  updateTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default EditTodo;
