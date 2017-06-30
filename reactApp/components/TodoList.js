import React from 'react';

class TodoList extends React.Component {
  render(){
    return( //TODO strikethrough if completed
      <div>
        <ul>
          {this.props.todos.map((todo) => <li><button>X</button> {todo.taskText}</li>)}
        </ul>
      </div>
    )
  }
}

export default TodoList;
