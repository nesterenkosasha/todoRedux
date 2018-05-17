export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id
});

export const updateTodo = (id) => ({
    type: 'UPDATE_TODO',
    payload: id
});

export const doneTodo = (id) => ({
    type: 'DONE_TODO',
    payload: id
});

export const changeTodo = (id, value) => ({
    type: 'CHANGE_TODO',
    payload: {id,value}
});



