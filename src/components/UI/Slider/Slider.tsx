import React from 'react'
import s from './Slider.module.scss'
import img from 'src/assets/img/pngJpeg/headphones1.png'
import img2 from 'src/assets/img/pngJpeg/headphones2.png'
import img3 from 'src/assets/img/pngJpeg/headphones3.png'

const Slider = () => {
	return (
		<div className={s.slider}>
			<div className={s.line}>
				<img src={img} className={s.item} />
				<img src={img2} className={s.item} />
				<img src={img3} className={s.item} />
			</div>
		</div>
	)
}

export default Slider