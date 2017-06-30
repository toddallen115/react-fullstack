import React from 'react';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';

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

  removeTodo(index){
    var newData = dummyData;
    newData.splice(index, 1);
    this.setState({todos: newData});
  }

  render(){
    return(
      <div>
        <InputLine submit={(t) => this.addTodo(t)} />
        <TodoList todos={this.state.todos} todoXClick={(i) => this.removeTodo(i)} />
      </div>
    )
  }
}

export default TodoApp;
