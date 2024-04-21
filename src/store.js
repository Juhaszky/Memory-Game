import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import settingsSlice from './features/settings/settingsSlice'
import gameSlice from './features/game/gameSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    settings: settingsSlice,
    game: gameSlice
  }
})