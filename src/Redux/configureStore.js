import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './Slices/todoSlice'


export default configureStore({
    reducer: {
        todos: todoReducer
    }
})