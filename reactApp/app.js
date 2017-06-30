// var React = require('react');
import React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';


const dummyData = [{taskText: "Get groceries", completed: true},
                  {taskText: "Finish this code", completed: false},
                  {taskText: "Practice promises", completed: false},
                  {taskText: "Watch fireworks", completed: false}];


class InputLine extends React.Component { //TODO this can be made a function?
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" placeholder="Task" />
          <input type="submit" value="Add todo" />
        </form>
      </div>
    )
  }
}

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

  render(){
    return(
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}



ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
