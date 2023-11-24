import { MouseEvent, FC } from 'react'
import s from './ButtonBlack.module.scss'

interface IButtonBlackProps {
	value: string,
	onClick?: MouseEvent<HTMLButtonElement>
}

const ButtonBlack: FC<IButtonBlackProps> = ({ value }) => {
	return (
		<button className={s.button}>
			{value}
		</button>
	)
}

export default ButtonBlack