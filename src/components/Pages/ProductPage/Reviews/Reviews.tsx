import { FC, useState } from 'react'
import s from './Reviews.module.scss'
import { FaChevronDown, FaMessage } from 'react-icons/fa6'
import Rating from 'src/components/Rating/Rating'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import Review from './Review/Review'
import CreateReviewModal from './CreateReviewModal/CreateReviewModal'


interface IReviewsProps {
	id: string
}

const Reviews: FC<IReviewsProps> = ({ id }) => {

	const [{ reviewId, rating, productReviews }] = useSelector((state: RootState) => state.reviews.filter(r => r.reviewId === id))


	const [open, setOpen] = useState<Boolean>(false)

	const [modal, setModal] = useState(false)

	const hideModal = () => {
		setModal(false)
	}
	const showModal = () => {
		setModal(true)
	}

	return (
		<div className={s.reviews}>
			{modal ? <CreateReviewModal
				hideModal={hideModal}
				productId={id} /> : <></>}
			<div className={s.reviewHeader}>
				<p className={s.title}>Отзывы</p>
				<div className={s.writeButton} onClick={showModal}>
					<FaMessage />
				</div>
				<Rating value={rating} />
				<FaChevronDown className={!open ? s.chevrone : `${s.chevrone} ${s.chevroneOpened}`}
					onClick={() => { setOpen(!open) }} />
			</div>
			{open ?
				<div className={s.reviewsBlock}>
					<div className={s.list}>
						{productReviews.map(r => <Review name={r.name}
							key={reviewId}
							message={r.message}
							rating={r.rating} />)}
					</div>
				</div>
				:
				<></>}

		</div>
	)
}

export default Reviews