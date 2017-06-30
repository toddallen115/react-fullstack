import React from 'react';

class InputLine extends React.Component { //TODO this can be made a function?
  constructor(props){
      super(props);

      this.state = {
        typedText: "",
      }
  }

  handleTyping(event){
    this.setState({typedText: event.target.value})
  }

  handleSubmit(text){
    this.props.submit(text);
    this.setState({typedText: ""});
  }

  render(){
    return(
      <div>
        <form>
          <input type="text"
                 placeholder="Task"
                 onChange={(event) => this.handleTyping(event)}
                 value={this.state.typedText} />
          <input type="submit"
                 value="Add todo"
                 onClick={() => this.handleSubmit(this.state.typedText)} />
        </form>
      </div>
    )
  }
}

export default InputLine;
