import { ChangeEvent, FC, useState } from 'react'
import s from './CreateReviewModal.module.scss'
import { MouseEvent } from 'react'
import MyInput from 'src/components/UI/MyInput/MyInput'
import MyTextArea from 'src/components/UI/MyTextArea/MyTextArea'
import ButtonBlack from 'src/components/UI/ButtonBlack/ButtonBlack'
import Rate from 'src/components/Rate/Rate'
import { useDispatch } from 'react-redux'
import { addReview } from 'src/store/slices/reviewsSlice'
import { FaTimes } from 'react-icons/fa'

interface IViewModal {
	hideModal: () => void,
	productId: string
}

const CreateReviewModal: FC<IViewModal> = ({ hideModal, productId }) => {

	const dispatch = useDispatch()

	const modalClickHandler = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
	}

	const [name, setName] = useState('')

	const [review, setReview] = useState('')

	const [rate, setRate] = useState(0)

	const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}
	const reviewChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setReview(e.target.value)
	}

	const changeClickedId = (id: number) => {
		setRate(id)
	}


	const sendReviewHandler = () => {
		const newReview = {
			name: name,
			message: review,
			rating: rate
		}
		dispatch(addReview({ productId, newReview }))
		hideModal()
	}

	return (
		<div className={s.modalWrapper} onClick={hideModal}>
			<div className={s.modal} onClick={modalClickHandler}>
				<div className={s.header}>
					<h2 className={s.title}>Мой отзыв</h2>
					<FaTimes onClick={hideModal} />
				</div>

				<MyInput
					isEmpty={name ? false : true}
					placeholder='Ваше имя'
					value={name}
					onChange={nameChangeHandler}
				/>
				<Rate
					clickedId={rate}
					changeClickedId={changeClickedId}
				/>
				<MyTextArea
					isEmpty={review ? false : true}
					placeholder='Ваш отзыв'
					value={review}
					onChange={reviewChangeHandler}
				/>
				<ButtonBlack
					disabled={!review || !name || !rate ? true : false}
					value='Отправить'
					onClick={sendReviewHandler}
				/>
			</div>
		</div>
	)
}

export default CreateReviewModal