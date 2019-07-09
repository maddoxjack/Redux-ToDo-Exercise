import React from "react";
import Todo from "./Todo";

import { connect } from "react-redux";
import { getTodos, getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

//exporting,
// calling the connect () function
// then calls mapstatetoprops as state => (todos: get todoes state)
//calls our export (todolist)
export default connect(mapStateToProps)(TodoList);
