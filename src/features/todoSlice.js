import { createSlice } from "@reduxjs/toolkit"

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, checked: false })
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.text = newText;
            }
        },
        delTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        delAllTodo: () => [],
        toggleChecked: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.checked = !todo.checked;
            }
        }
    },
});

export default todosSlice.reducer;
export const { addTodo, editTodo, delAllTodo, delTodo, toggleChecked } = todosSlice.actions;