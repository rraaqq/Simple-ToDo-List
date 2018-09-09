import React from 'react';
import style from './TodoForm.css'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    event.preventDefault();
    this.setState({
        text: event.target.value
    });
}

handleSubmit(event) {
    event.preventDefault();
    this.props.add(this.state.text);
    this.setState ({
        text: ''
    });
}

render() {
    return(
        <form className={style.TodoForm} onSubmit={this.handleSubmit}>
            <input
                type="text"
                placeholder="Task"
                value={this.state.text}
                onChange={this.handleChange}
            />
            <button 
                type="submit"
                value="Submit">
                Add Task
            </button>
        </form>
    );
  }
}

export default TodoForm;