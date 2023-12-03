import { useState, FC } from 'react'
import s from './Rate.module.scss'
import RateStar from './RateStar'


interface IRate {
	clickedId: number
	changeClickedId: (id: number) => void
}

const Rate: FC<IRate> = ({ clickedId, changeClickedId }) => {

	const [rateStars, setRateStars] = useState([
		{
			id: 1,
			active: false,

		},
		{
			id: 2,
			active: false,

		},
		{
			id: 3,
			active: false,

		},
		{
			id: 4,
			active: false,

		},
		{
			id: 5,
			active: false,

		}
	])



	const activeRateStars = (id: number) => {

		setRateStars(rateStars.map(el => {
			if (el.id <= id) {
				el.active = true
			}
			else {
				el.active = false
			}
			return el
		}))
	}

	const falseRateStars = (id: number) => {

		setRateStars(rateStars.map(el => {
			if (el.id >= id) {
				el.active = false
			}
			return el
		}))
	}

	const mouseOutHandler = () => {
		setRateStars(rateStars.map(el => {
			if (clickedId) {
				if (el.id <= clickedId) {
					el.active = true
				}
				else {
					el.active = false
				}
			}
			else {
				el.active = false
			}

			return el
		}))
	}


	return (
		<div className={s.rateBlock}>
			<div className={s.rate} onMouseOut={mouseOutHandler}>
				{rateStars.map(el => <RateStar
					falseRateStars={falseRateStars}
					activeRateStars={activeRateStars}
					clickHandler={changeClickedId}
					active={el.active}
					id={el.id}
					key={el.id}
				/>)}
			</div>
			{!clickedId ? <p className={s.requiredWarning}>Поставьте оценку</p> : <></>}
		</div>
	)
}

export default Rate