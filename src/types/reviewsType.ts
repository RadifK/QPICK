import reviewType from "./reviewType";

type reviewsType = {
	reviewId: string,
	rating: number,
	productReviews: reviewType[]
}

export default reviewsType