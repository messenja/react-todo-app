import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

function Todos() {
  return (
    <div className="app-todos">
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
}

export default Todos;
