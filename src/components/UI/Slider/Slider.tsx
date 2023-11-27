import { FC, useState } from 'react'
import s from './Slider.module.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'



interface ISliderProps {
	children: string[]
}

const Slider: FC<ISliderProps> = ({ children }) => {

	const [offset, setOffset] = useState(0)

	const rightHandler = () => {
		if (offset === -200) {
			setOffset(0)
		}
		else {
			setOffset((prev) => prev - 100)
		}

	}
	const leftHandler = () => {
		if (offset === 0) {
			setOffset(-200)
		}
		else {
			setOffset((prev) => prev + 100)
		}

	}

	return (
		<div className={s.slider}>
			<FaChevronLeft onClick={leftHandler} className={s.button} />
			<div className={s.sliderContainer}
			>
				<div className={s.line}
					style={{
						transform: `translateX(${offset}%)`,
						transition: ' all 0.2s ease-in-out'
					}}>
					{
						children.map(el => <img
							className={s.item}
							src={el}
							style={{
								height: '100%',
								minWidth: '100%',
								maxWidth: '100%'
							}}
						/>)
					}

				</div>

			</div>
			<FaChevronRight onClick={rightHandler} className={s.button} />
		</div>
	)
}

export default Slider