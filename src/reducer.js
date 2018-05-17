import { changeState } from './helper.js'
const INIT = []
const addTodoHandler = (state, payload) => {
    const todoData = {id: Date.now(), date: Date.now(), value: payload, flag: false, readonly: false};
     const updatedTodos = state.concat(todoData);
     return updatedTodos;
}

const removeTodoHandler = (state, payload) => {
    const updatedTodos = state.filter((el) => el.id != payload)
   // this.setState({ todos: updatedTodos }, () => setLocalStorage(updatedTodos))
    return updatedTodos;
}

const toggleTodoHandler = (state, payload) => {
    const updatedTodos = changeState("flag", payload, state)
    return updatedTodos;
  }

const updateTodoHandler = (state, payload) => {

    const updatedTodos = changeState("readonly", payload, state)
    return updatedTodos;
  }

const changeTodoHandler = (state, payload) => {
    const updatedTodos = state.map((el) => {
      if(el.id == payload.id){
        return Object.assign({}, el, {value: payload.value})
      } else {
        return el
      }
    })
    return updatedTodos;
}

export default (state = INIT, action) => {
    const { type, payload } = action;

    switch(type) {
    case 'ADD_TODO':
        return addTodoHandler(state, payload);

    case 'DONE_TODO':
        return toggleTodoHandler(state, payload);

    case 'DELETE_TODO':
        return removeTodoHandler(state, payload);

    case 'UPDATE_TODO':
        return updateTodoHandler(state, payload);

    case 'CHANGE_TODO':
        return changeTodoHandler(state, payload);

    default:
        return state;
   }
}




























// function reducer(state = ["init"], action){
//     const { type, payload } = action;
//
//     switch(type) {
//         case 'ADD_TODO':
//             return addTodoHandler(state, payload);
//
//         // case 'TOGGLE_DONE':
//         //     return toggleTodoHandler(state, payload);
//         //
//         // case 'REMOVE_TODO':
//         //     return removeTodoHandler(state, payload);
//         //
//         // case 'UPDATE_TODO':
//         //     return updateTodoHandler(state, payload);
//         //
//         default:
//             return state;
//     }
//     console.log("ACTION", action)
//     if(action.type == 'ADD_TODO'){
//         return state.concat(action.payload)
//         console.log('ADD_TODO')
//     }
//     console.log("state", state)
//     return state
// }





// const addItemHandler = (state, payload) => {
//     const itemData = {id: Math.random(), value: payload, done: false};

//     const updatedItems = state.items.concat(itemData);

//     return updatedItems;
// };

// const toggleItemHandler = (state, payload) => {
//     const updatedItems = state.items.map(item => {
//         if (item.id === payload.id) {
//             return { ...item, done: !item.done };
//         }

//         return item;
//     });

//     return updatedItems;
// };

// const removeItemHandler = (state, payload) => {
//     const updatedItems = state.items.filter(item => (item.id !== payload.id));

//     return updatedItems;
// };

// const updateItemsHandler = (state, payload) => {
//     return payload.items;
// };

// export default (state = INIT, action) => {
//     const { type, payload } = action;

//     switch(type) {
//     case 'ADD_ITEM':
//         return addItemHandler(state, payload);

//     case 'TOGGLE_ITEM':
//         return toggleItemHandler(state, payload);

//     case 'REMOVE_ITEM':
//         return removeItemHandler(state, payload);

//     case 'UPDATE_ITEMS':
//         return updateItemsHandler(state, payload);

//     default:
//         return state;
//     }
// }