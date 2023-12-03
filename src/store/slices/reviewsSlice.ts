import { createSlice } from "@reduxjs/toolkit";
import reviewsType from "src/types/reviewsType"

const initialState: reviewsType[] = [
	{
		reviewId: "1",
		rating: 3.3,

		productReviews: [
			{
				name: 'Рандомный чел',
				message: 'товар - пушка',
				id: 1,
				rating: 5
			},
			{
				name: 'Нерандомный чел',
				message: 'товар - шляпа',
				id: 2,
				rating: 1
			},
			{
				name: 'Ещё один чел',
				message: 'не понял ещё',
				id: 3,
				rating: 4
			},
		]
	},

	{
		reviewId: '2',
		rating: 3.3,
		productReviews: [
			{
				name: 'Рандомный чел',
				message: 'товар - пушка',
				id: 1,
				rating: 5
			},
			{
				name: 'Нерандомный чел',
				message: 'товар - шляпа',
				id: 2,
				rating: 1
			},
			{
				name: 'Ещё один чел',
				message: 'не понял ещё',
				id: 3,
				rating: 4
			},
		]
	},

	{
		reviewId: "3",
		rating: 3.3,
		productReviews: [
			{
				name: 'Рандомный чел',
				message: 'товар - пушка',
				id: 1,
				rating: 5
			},
			{
				name: 'Нерандомный чел',
				message: 'товар - шляпа',
				id: 2,
				rating: 1
			},
			{
				name: 'Ещё один чел',
				message: 'не понял ещё',
				id: 3,
				rating: 4
			},
		]
	},

	{
		reviewId: "4",
		rating: 3.3,
		productReviews: [
			{
				name: 'Рандомный чел',
				message: 'товар - пушка',
				id: 1,
				rating: 5
			},
			{
				name: 'Нерандомный чел',
				message: 'товар - шляпа',
				id: 2,
				rating: 1
			},
			{
				name: 'Ещё один чел',
				message: 'не понял ещё',
				id: 3,
				rating: 4
			},
		]
	},

	{
		reviewId: "5",
		rating: 3.3,
		productReviews: [
			{
				name: 'Рандомный чел',
				message: 'товар - пушка',
				id: 1,
				rating: 5
			},
			{
				name: 'Нерандомный чел',
				message: 'товар - шляпа',
				id: 2,
				rating: 1
			},
			{
				name: 'Ещё один чел',
				message: 'не понял ещё',
				id: 3,
				rating: 4
			},
		]
	},

	{
		reviewId: "6",
		rating: 3.3,
		productReviews: [
			{
				name: 'Рандомный чел',
				message: 'товар - пушка',
				id: 1,
				rating: 5
			},
			{
				name: 'Нерандомный чел',
				message: 'товар - шляпа',
				id: 2,
				rating: 1
			},
			{
				name: 'Ещё один чел',
				message: 'не понял ещё',
				id: 3,
				rating: 4
			},
		]
	},

]

export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {
		addReview(state, { payload }) {
			state.map(p => {
				if (p.reviewId === payload.productId) {
					p.rating = Number(((p.rating + payload.newReview.rating) / 2).toFixed(1))
					p.productReviews = [...p.productReviews, payload.newReview]
				}
				return p
			})
		}
	}
})

export const { addReview } = reviewsSlice.actions
export default reviewsSlice.reducer