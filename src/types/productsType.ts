import reviewType from "./reviewType"

type productType = {
	id: string,
	name: string,
	price: string,
	rating: number,
	img: string,
	isLiked: Boolean,
	images: string[],
	reviews: reviewType[]
}

export default productType