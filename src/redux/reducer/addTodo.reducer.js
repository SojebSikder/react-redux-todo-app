const initState = {
    todos: [],
    text: '',
    selected: undefined,
}

export const addTodo = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TEXT':
            return {
                ...state,
                text: action.payload
            };
        case 'ADD_TODO':
            return {
                ...state,
                todos: state.todos.concat(action.payload),
                text: ''
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo, i) => i !== action.payload)
            };
        case 'EDIT_TODO':
            return {
                ...state,
                text: state.todos[action.payload],
                selected: action.payload
            };
        case 'EDIT_ADD_TODO':
            return {
                ...state,
                todos: state.todos.map((todo, i) => i !== action.payload.selected ? todo : action.payload.value),
                selected: undefined,
                text: ''
            };
        default:
            return state;
    }
}