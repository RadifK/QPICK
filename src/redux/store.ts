import { configureStore } from '@reduxjs/toolkit'
import products from './slices/productsSlice'
import favorites from './slices/favoritesSlice'

export const store = configureStore({
	reducer: {
		products,
		favorites
	},
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch