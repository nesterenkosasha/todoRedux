import React, {PureComponent} from "react";
import ButtonComponent from '../button'
import InputComponent from '../input'
import '../app-layout/styles.css'

export default class Todo extends PureComponent {

    render(){
        const { el, handelDeleteClick, handelDoneClick, handelUpdateClick, readonly, handelInput, inputRef } = this.props
        return(
      <div id={el.id} className="todoItem">
          <ButtonComponent
            type="submit"
            value="x"
            classNames="btn"
            handelClick={() => handelDeleteClick(el.id)}
            />
          <ButtonComponent
              type="submit"
              value="DONE"
              classNames="btn"
              handelClick={() => handelDoneClick(el.id)}
          />
          <ButtonComponent
              type="submit"
              value="UPDATE"
              classNames="btn"
              handelClick={() => handelUpdateClick(el.id)}
          />
            <InputComponent
            type={"text"}
            inputRef={input => this.inputRef = input }
             onInput={el.readonly ? () => handelInput(el.id, this.inputRef.value) : null}
            classNames={el.flag ? "input done" : el.readonly ? "input edition" : "input"}
            value={el.readonly ? "" : el.value}
            readonly={el.readonly ? readonly : null}
            />
          <span className="span"> created at</span>
          <span>{new Date(el.date).toLocaleDateString()}</span>
            </div>
        )
    }
}