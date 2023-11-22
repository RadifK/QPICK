import s from './Banner.module.scss'
import img from './../../../assets/img/pngJpeg/iphone13-img.png'

const Banner = () => {
	return (
		<div className={s.banner}>
			<h2>Аксессуары для
				Iphone 13 Pro Max</h2>
			<div className={s.imgBlock}><img src={img} alt="" /></div>
		</div>
	)
}

export default Banner