import { configureStore } from '@reduxjs/toolkit'
import portfolioSlice from '../features/portfolioSlice'
import socketMiddleware from './socketMiddleware'

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch