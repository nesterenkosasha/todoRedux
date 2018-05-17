import React, { Component } from 'react';
import ButtonComponent from '../button'
import InputComponent from '../input'
import { connect } from 'react-redux';

class  FormComponent extends Component {

    handelSubmit = (e) => {
        e.preventDefault();
        const value = this.inputRef.value;
        if(value) {
          this.props.addTodo(value);
        }
        this.inputRef.value = ""
    }

    render(){
    return(
        <form onSubmit={this.handelSubmit}>
        <span className="inputLabel">Input your todo: </span>
        <InputComponent type="text" inputRef={(input) => this.inputRef = input} classNames="input" />
        <ButtonComponent type="submit" value="submit" classNames="input" />
      </form>
    )
} }


const mapDispatchToProps = (dispatch) => {
    return {
       addTodo: (value) => dispatch({ type: 'ADD_TODO', payload: value })
    }
};


export default connect(null, mapDispatchToProps)(FormComponent);