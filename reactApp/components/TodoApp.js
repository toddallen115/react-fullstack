import React from 'react';
import TodoList from './TodoList.js';
import InputLine from './Todo.js';

const dummyData = [{taskText: "Get groceries", completed: true},
                  {taskText: "Finish this code", completed: false},
                  {taskText: "Practice promises", completed: false},
                  {taskText: "Watch fireworks", completed: false}];


class TodoApp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [],
    }
  }

  componentDidMount(){
    this.setState({todos: dummyData});
  }

  addTodo(task){
    var newData = dummyData.concat([{taskText: task, completed: false}]);
    this.setState({todos: newData});
  }

  render(){
    return(
      <div>
        <InputLine submit={(t) => this.addTodo(t)} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;
