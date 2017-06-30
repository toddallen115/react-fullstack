// var React = require('react');
import React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';


const dummyData = ["Get groceries", "Finish this code", "Practice promises", "Watch fireworks"];

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <ul>
          {dummyData.map( (todo) => <li><button>X</button> {todo}</li> )}
        </ul>
      </div>
    )
  }
}



ReactDOM.render(<TodoList />,
   document.getElementById('root'));
