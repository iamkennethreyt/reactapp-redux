import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateUser } from './actions/users-action';

class App extends Component {
  
  state={
    text:''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdateUser(this.state.text)
  }

  onChange = (e) =>{
    this.setState({
      text:e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
        <label>Input Text:</label><br/>
          <input onChange={this.onChange}/>
        </form>
        <h3>{this.props.user}</h3>
      </div>
    );
  }
}

const mapStateProps = (state)=> {
  return{
      user: state.user
  }
};

const mapActionProps ={
    onUpdateUser : updateUser
}


export default connect(mapStateProps, mapActionProps) (App);
