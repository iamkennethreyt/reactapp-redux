import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateUser } from './actions/users-action';

class App extends Component {

  onUpdate = (e) => {
    this.props.onUpdateUser(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <h3>{this.props.user}</h3>
        <input onChange={this.onUpdate}/>
      </div>
    );
  }
}

const mapStateProps = (state, props)=> {
  return{
      user: state.user,
      products: state.products,
      userPropsPlusRandProps: `${state.user} ${props.aRandProps}`
  }
};

const mapActionProps ={
    onUpdateUser : updateUser
}


export default connect(mapStateProps, mapActionProps) (App);
