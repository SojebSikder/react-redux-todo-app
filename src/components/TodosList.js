import React from 'react'
import { connect } from 'react-redux';
import Todo from './Todo';

function TodosList({ todos }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
            margin: '0 auto',
            height: '200px',
            overflowY: 'auto',
            overflowX: 'hidden'
        }}>
            {
                todos.map((todo, i) => {
                    return (
                        <Todo key={i} todo={todo} idx={i} />
                    );
                })
            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodosList);