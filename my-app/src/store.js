import { configureStore } from '@reduxjs/toolkit'
import jokes from './reducers/jokes'

export default configureStore({
  reducer: {
    jokes,
  },
})
