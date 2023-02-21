import React, { useReducer, useEffect } from 'react';

import { validate } from '../../utils/validators';

// add styling to the select element so there's a down arrow
const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators),
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true,
            };
        default:
            return state;
    }
};

const Input = props => {

    const initialValue = (props.initialValue || props.initialValue === false) ? props.initialValue : '';

    const {
        id, type, element, onInput,
        label, placeholder,
        validators, errorText, disabled, 
        initialValidity,
        children, autocomplete,
        rows, actionChange, align, name,
    } = props;

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: initialValue,
        isValid: initialValidity || false,
        isTouched: false,
    });

    const { value, isValid, isTouched } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput, inputState]);

    const changeHandler = event => {
        const { target } = event;

        switch (type) {
            case 'checkbox':
                dispatch({ type: 'CHANGE', val: target.checked, validators: validators });
                if (actionChange) actionChange(event);
                
                break;
            case 'radio':
                dispatch({ type: 'CHANGE', val: target.value, validators: validators });
                if (actionChange) actionChange(event);

                break;
            default:
                dispatch({ type: 'CHANGE', val: target.value, validators: validators });
                if (actionChange) actionChange(event);
                
                break;
        }
    };

    const touchHandler = () => {
        dispatch({ type: 'TOUCH' });
    };

    let htmlElement;
    switch (element) {
        case 'input':
            htmlElement = (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={value}
                    disabled={disabled || false}
                    autoComplete={autocomplete}
                />
            );

            break;
        case 'textarea':
            htmlElement = (
                <textarea
                    id={id}
                    rows={rows || 3}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={value}
                />
            );

            break;
        case 'select':
            htmlElement = (
                <select
                    id={id}
                    value={value}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    placeholder={placeholder}
                >
                    {children}
                </select>
            );

            break;
        case 'checkbox':
            htmlElement = (
                <div className={`form-control form-control--checkbox form-control--checkbox--${align || 'center'} ${!isValid && isTouched && 'form-control--invalid'}`}>
                    <input 
                        type={type}
                        id={id}
                        onBlur={touchHandler}
                        onChange={changeHandler}
                        checked={value}
                    /> 

                    {(!isValid && isTouched && errorText) && (
                        <p>{errorText}</p>
                    )}
                </div>
            );
        
            break;
        case 'radio':
            htmlElement = (
                <div className={`form-control form-control--radio form-control--radio--${align || 'center'} ${!isValid && isTouched && 'form-control--invalid'}`}>
                    <input
                        type={type}  
                        id={id}
                        onBlur={touchHandler}
                        name={name}
                        onChange={changeHandler}
                        value={initialValue}
                    /> 

                    {(!isValid && isTouched) && (
                        <p>{errorText}</p>
                    )}
                </div>
            );

            break;
        default:
     }

    return (
        <div className={`form-control ${!isValid && isTouched && 'form-control--invalid'}`}>
            <label htmlFor={id}>
                {label}
            </label>
            
            {htmlElement}

            {(!isValid && isTouched && errorText) && (
                <p>{errorText}</p>
            )}
        </div>
    );
}; 

export default Input;