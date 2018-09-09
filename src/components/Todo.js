import React from 'react';
import style from './Todo.css';

const Todo = ({task, remove}) => {

  return (
    <li className={style.Todo}>
        {task.text}
    <button className="button" onClick={() => remove(task.id)}> X </button>
    </li>
  )
}

export default Todo;