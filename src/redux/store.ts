import { configureStore } from '@reduxjs/toolkit'
import products from './slices/productsSlice'
import favorites from './slices/favoritesSlice'
import product from './slices/productPageSlice'

export const store = configureStore({
	reducer: {
		products,
		favorites,
		product
	},
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch