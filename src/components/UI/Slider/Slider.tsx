import { FC, useState } from 'react'
import s from './Slider.module.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'



interface ISliderProps {
	children: string[]
}

const Slider: FC<ISliderProps> = ({ children }) => {

	const [offset, setOffset] = useState(0)

	const rightHandler = () => {
		if (offset === (children.length - 1) * -100) {
			setOffset(0)
		}
		else {
			setOffset((prev) => prev - 100)
		}

	}
	const leftHandler = () => {

		if (offset === 0) {
			setOffset((children.length - 1) * -100)
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
					}}>
					{
						children.map(el => <img
							key={el}
							className={s.item}
							src={el}
						/>)
					}
				</div>

			</div>
			<FaChevronRight onClick={rightHandler} className={s.button} />
		</div>
	)
}

export default Slider