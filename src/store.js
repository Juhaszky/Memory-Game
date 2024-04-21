import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import settingsSlice from './features/settings/settingsSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    settings: settingsSlice
  }
})