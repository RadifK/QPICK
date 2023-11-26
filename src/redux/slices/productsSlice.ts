import { createSlice } from "@reduxjs/toolkit";
import { productsType } from "src/types";


const initialState: productsType[] = [
	{
		"name": "Apple BYZ S852I",
		"price": "1000",
		"rating": 4.2,
		"img": "src/assets/img/pngJpeg/headphones1.png",
		"isLiked": false,
		"id": "1"
	},
	{
		"name": "Apple EarPods",
		"price": "1200",
		"rating": 4.2,
		"img": "src/assets/img/pngJpeg/headphones2.png",
		"isLiked": false,
		"id": "2"
	},
	{
		"name": "Apple EarPods",
		"price": "1400",
		"rating": 4.5,
		"img": "src/assets/img/pngJpeg/headphones3.png",
		"isLiked": false,
		"id": "3"
	},
	{
		"name": "Apple BYZ S852I",
		"price": "1000",
		"rating": 4.7,
		"img": "src/assets/img/pngJpeg/headphones1.png",
		"isLiked": false,
		"id": "4"
	},
	{
		"name": "Apple EarPods",
		"price": "1200",
		"rating": 4.6,
		"img": "src/assets/img/pngJpeg/headphones2.png",
		"isLiked": false,
		"id": "5"
	},
	{
		"name": "Apple EarPods",
		"price": "1400",
		"rating": 4.8,
		"img": "src/assets/img/pngJpeg/headphones3.png",
		"isLiked": false,
		"id": "6"
	}
]



export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		like(state, { payload }) {
			state.map(p => {
				if (p.id === payload) {
					p.isLiked = !p.isLiked
				}
				return p
			})
		}
	}
})

export const { like } = productsSlice.actions
export default productsSlice.reducer