import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name : "todos",

    initialState: [
        /*{ id: 1, title: "todo1", isChecked: true},
        { id: 2, title: "todo2", isChecked: false},*/
    ],

    reducers: {
        addTodo: (state, action) => {
            //* Creating our new todo based on the action payload (title)
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                isChecked: false,
            }
            state.push(newTodo) //* Push our newTodo object to the array intialState
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id )
            //* This reducer in charge to update the current value of the (isChecked property) based on the payload received from the dispatch, finnaly redux change the state in the store.
            state[index].isChecked = action.payload.isChecked
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            //! unfinished
            const index = state.findIndex((todo) => todo.id === action.payload.id )
            state[index].title = action.payload.title
        },
        filterTodos: (state, action) => {
            //! unfinished
            return state.filter((todo) => todo.isChecked === action.payload.isChecked)
        }
    }
})

//* Export action to dispatch in component
export const {
    addTodo,
    toggleComplete,
    deleteTodo,
    updateTodo,
    filterTodos
} = todoSlice.actions

export default todoSlice.reducer