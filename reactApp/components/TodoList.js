import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
  render(){
    return( //TODO strikethrough if completed
      <div>
        <ul>
          {this.props.todos.map((todo, index) => <Todo todo={todo.taskText} xClick={() => this.props.todoXClick(index)} />)}
        </ul>
      </div>
    )
  }
}

export default TodoList;
