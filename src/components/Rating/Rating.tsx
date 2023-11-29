import { FC } from 'react'
import s from './Rating.module.scss'
import img from 'src/assets/img/svg/rating.svg'

interface IRatingProps {
	value: number
}

const Rating: FC<IRatingProps> = ({ value }) => {
	return (
		<div className={s.rating}>
			<img src={img} alt="" />
			<p>{value}</p>
		</div>
	)
}

export default Rating