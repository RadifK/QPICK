import { FC } from 'react'
import activeRate from 'src/assets/img/svg/rating.svg'
import whiteRating from 'src/assets/img/svg/whiteRating.svg'

interface IRateStartProps {
	active: boolean
	id: number,
	activeRateStars: (id: number) => void,
	falseRateStars: (id: number) => void,
	clickHandler: (id: number) => void
}

const RateStar: FC<IRateStartProps> = ({ active, clickHandler, activeRateStars, falseRateStars, id }) => {

	const onMouseRateOver = () => {
		activeRateStars(id)
	}

	const onMouseRateOut = () => {
		falseRateStars(id)
	}

	const rateClick = () => {
		clickHandler(id)
	}

	return (
		<img
			onClick={rateClick}
			onMouseOver={onMouseRateOver}
			onMouseOut={onMouseRateOut}
			src={active ? activeRate : whiteRating} alt="" />
	)
}

export default RateStar