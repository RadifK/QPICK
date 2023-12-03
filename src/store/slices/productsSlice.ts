import image from 'src/assets/img/pngJpeg/headphones1.png'
import image2 from 'src/assets/img/pngJpeg/headphones2.png'
import image3 from 'src/assets/img/pngJpeg/headphones3.png'
import { createSlice } from "@reduxjs/toolkit";
import productType from "src/types/productsType";


const initialState: productType[] = [
	{
		"name": "Apple BYZ S852I",
		"price": "1000",
		"img": "src/assets/img/pngJpeg/headphones1.png",
		"isLiked": false,
		"id": "1",
		"images": [image3, image, image2],
	},
	{
		"name": "Apple EarPods",
		"price": "1200",
		"img": "src/assets/img/pngJpeg/headphones2.png",
		"isLiked": false,
		"id": "2",
		"images": [image2, image3, image],

	},
	{
		"name": "Apple EarPods",
		"price": "1400",
		"img": "src/assets/img/pngJpeg/headphones3.png",
		"isLiked": false,
		"id": "3",
		"images": [image, image2, image3],

	},
	{
		"name": "Apple BYZ S852I",
		"price": "1000",
		"img": "src/assets/img/pngJpeg/headphones1.png",
		"isLiked": false,
		"id": "4",
		"images": [image, image2, image, image2],

	},
	{
		"name": "Apple EarPods",
		"price": "1200",
		"img": "src/assets/img/pngJpeg/headphones2.png",
		"isLiked": false,
		"id": "5",
		"images": [image3, image, image2],

	},
	{
		"name": "Apple EarPods",
		"price": "1400",
		"img": "src/assets/img/pngJpeg/headphones3.png",
		"isLiked": false,
		"id": "6",
		"images": [image2, image3, image],

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
		},
	}
})

export const { like } = productsSlice.actions
export default productsSlice.reducer