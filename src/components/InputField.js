import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addText, addTodo, editAddTodo } from '../redux/action/addTodo.action';

function InputField(props) {

    // Methods
    const handleChange = (e) => {
        props.addText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.selected || props.selected === 0)
            props.editAddTodo({
                value: props.text,
                selected: props.selected
            });
        else
            props.addTodo(props.text);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text"
                name="todo"
                value={props.text}
                autoComplete="off"
                id="Enter your todo..."
            />
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo)),
    addText: (value) => dispatch(addText(value)),
    editAddTodo: (obj) => dispatch(editAddTodo(obj))
});

const mapStateToProps = (state) => ({
    text: state.text,
    selected: state.selected
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
