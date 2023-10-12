import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: nanoid(),
        text: "Hello Redux",
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
           const val = {
             id: nanoid(),
             text: action.payload
           }
           state.todos.push(val);
        },

        deleteTodo : (state, action) => {
           state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer

