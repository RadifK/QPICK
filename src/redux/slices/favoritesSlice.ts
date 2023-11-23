import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addProductToFavorites(state, { payload }) {
			state.push(payload)
		},
		removeFromFavorites(state, { payload }) {
			state = state.filter(el => el !== payload)
			return state
		}

	}
})


export const { addProductToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer