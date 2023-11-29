import { useState } from 'react'
import s from './Reviews.module.scss'
import { FaChevronDown } from 'react-icons/fa'
import Rating from 'src/components/Rating/Rating'

const Reviews = () => {

	const [open, setOpen] = useState<Boolean>(false)


	return (
		<div className={s.review}>
			<div className={s.reviewHeader}>
				<p className={s.title}>Отзывы</p>
				<Rating value={4.5} />
				<FaChevronDown className={!open ? s.chevrone : `${s.chevrone} ${s.chevroneOpened}`} onClick={() => { setOpen(!open) }} />
			</div>
			{open ? <div className={s.list}>
				<ul>
					<li>asdasd</li>
					<li>ssssss</li>
					<li>zzzz</li>
					<li>ddddd</li>
				</ul>
			</div> : <></>}

		</div>
	)
}

export default Reviews