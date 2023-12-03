import { configureStore } from '@reduxjs/toolkit'
import products from './slices/productsSlice'
import reviews from './slices/reviewsSlice'


export const store = configureStore({
	reducer: {
		products,
		reviews
	},
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch