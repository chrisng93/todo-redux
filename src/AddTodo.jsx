import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './todoActions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
  }

  onAddTodo(e) {
    const {todo} = this.state;
    e.preventDefault();
    if (todo) {
      this.props.addTodo({description: todo, isCompleted: false});
      this.setState({todo: ''});
    }
  }

  render() {
    return (
      <form className="addtodos">
        <input
          placeholder="What needs to be done?"
          value={this.state.todo}
          onChange={e => this.setState({todo: e.target.value})}
        />
        <button onClick={this.onAddTodo.bind(this)}>Add Todo</button>
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todo => dispatch(actions.addTodo(todo)),
  };
};

export default connect(state => {}, mapDispatchToProps)(AddTodo);
