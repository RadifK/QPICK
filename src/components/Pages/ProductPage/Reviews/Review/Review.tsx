import { FC } from 'react'
import s from './Review.module.scss'
import Rating from 'src/components/Rating/Rating'

interface IReviewProps {
	name: string,
	message: string,
	rating: number,
}

const Review: FC<IReviewProps> = ({ name, message, rating }) => {
	return (
		<div className={s.review}>
			<div className={s.nameAndRating}>
				<p className={s.name}>{name}</p>
				<Rating value={rating} />
			</div>
			<p className={s.message}>{message}</p>

		</div>
	)
}

export default Review