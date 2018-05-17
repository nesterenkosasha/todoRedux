import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Todo from './todo.js'
import '../app-layout/styles.css'
import { deleteTodo, updateTodo, doneTodo, changeTodo } from '../../actions'

class TodoComponent extends PureComponent {
    render(){
        return(
            <div>{this.props.todos.map(el => <Todo el={el}
             handelDeleteClick={this.props.deleteTodo}
             handelDoneClick={this.props.doneTodo}
             handelUpdateClick={this.props.updateTodo}
             handelInput={this.props.changeTodo}
             readonly
                />)}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
};
const mapDispatchToProps = {
    deleteTodo,
    updateTodo,
    doneTodo,
    changeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);






















//
// //
// {/*<div id={el.id} className="todoItem">*/}
// {/*<ButtonComponent */}
// {/*type={"submit"} */}
// {/*handelClick={() => handelDeleteClick(el.id)}*/}
// {/*value={"x"} */}
// {/*classNames="btn" */}
// {/*/>*/}
// {/*<ButtonComponent */}
// {/*type={"submit"} */}
// {/*handelClick={() => handelDoneClick(el.id)}*/}
// {/*value={"DONE"} */}
// {/*classNames={"btn"} */}
// {/*/>*/}
// {/*<ButtonComponent */}
// {/*type={"submit"} */}
// {/*handelClick={() => handelUpdateClick(el.id)}*/}
// {/*value={"UPDATE"} */}
// {/*classNames="btn" */}
// {/*/> */}
// {/*{*/}
// {/*<InputComponent */}
// {/*type={"text"} */}
// {/*inputRef={inputRef} */}
// {/*onInput={el.readonly ? (e) => handelInput(e, el.id) : null}*/}
// {/*classNames={el.flag ? "input done" : el.readonly ? "input edition" : "input"}*/}
// {/*value={el.readonly ? "" : el.value}*/}
// {/*readonly={el.readonly ? readonly : null}*/}
// {/*/>*/}
// {/*}  */}
// {/**/}
// {/*<span className="span"> created at</span>*/}
// {/*<span>{new Date(el.date).toLocaleDateString()}</span>*/}
// {/*</div>