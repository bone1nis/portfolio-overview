import { configureStore } from '@reduxjs/toolkit'
import portfolioSlice from '../features/portfolioSlice'

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch