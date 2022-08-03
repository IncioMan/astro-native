import { configureStore } from '@reduxjs/toolkit'
import purchaseReducer from './features/purchaseSlice'
import settingsReducer from './features/settingsSlice'

export const store = configureStore({
  reducer: {
      purchase: purchaseReducer,
      settings: settingsReducer
  },
})