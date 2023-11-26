import { createSlice } from "@reduxjs/toolkit";


const initialState: string = ''


export const productsPageSlice = createSlice({
	name: 'productPage',
	initialState,
	reducers: {
		changeProductPage(state, { payload }) {
			state = payload
			return state
		}
	}
})

export const { changeProductPage } = productsPageSlice.actions
export default productsPageSlice.reducer