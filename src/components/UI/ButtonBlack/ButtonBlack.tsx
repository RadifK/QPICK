import { FC, ButtonHTMLAttributes } from 'react'
import s from './ButtonBlack.module.scss'

interface IButtonBlackProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	value: string,
	onClick?: () => void,
}

const ButtonBlack: FC<IButtonBlackProps> = ({ value, ...props }) => {
	return (
		<button {...props} className={s.button}>
			{value}
		</button>
	)
}

export default ButtonBlack