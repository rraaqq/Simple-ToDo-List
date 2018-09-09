import React from 'react';
import Todo from './Todo';
import style from './TodoList.css';

const TodoList = ({todos, remove}) => {
  const tasks = todos.map(todo => {
    return (<Todo key={todo.id} task={todo} remove={remove} />)
    }
  );

  return (
    <ol className={style.TodoList}>
        {tasks}
    </ol>
  );
}

export default TodoList;