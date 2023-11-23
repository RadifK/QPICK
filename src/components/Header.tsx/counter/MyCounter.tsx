import { FC } from 'react'
import s from './MyCounter.module.scss'

interface ICounterProps {
	counter: number
}

const MyCounter: FC<ICounterProps> = ({ counter }) => {
	return (
		<div className={s.myCounter}>{counter}</div>
	)
}

export default MyCounter