import React from 'react';
import PropTypes from 'prop-types';


const InputComponent = (props) => {
    const { type, inputRef, classNames, value, readonly, onInput } = props
    return(       
        <input 
        readonly={readonly || null}
        type={type} 
        onInput={onInput || null} 
        value={value || null}
        className={Array.isArray(classNames) ? classNames.join(" ") : classNames} 
        ref={inputRef || null}
        />      
    )
}

InputComponent.propTypes = {
    type: PropTypes.string,
    inputRef: PropTypes.func,
    classNames: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array       
    ]),
    value:PropTypes.string, 
    readonly: PropTypes.bool, 
    onInput: PropTypes.func,
}
export default InputComponent