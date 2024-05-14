import { configureStore } from '@reduxjs/toolkit'
import notificactionReducer from './reducers/notificactionReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'

const store = configureStore({
  reducer: {
    notification: notificactionReducer,
    blogs: blogReducer,
    user: userReducer
  }
})

export default store
