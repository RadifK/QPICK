import ToFavorites from 'src/components/ToFavorites/ToFavorites'
import s from './ProductPage.module.scss'
import ButtonBlack from 'src/components/UI/ButtonBlack/ButtonBlack'
import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useParams } from 'react-router'
import NotFound from 'src/components/NotFound/NotFound'
import Reviews from './Reviews/Reviews'
import { FaChevronDown } from 'react-icons/fa'
import Slider from 'src/components/UI/Slider/Slider'


const ProductPage: FC = () => {

	const params = useParams()


	const products = useSelector((state: RootState) => state.products)
	const product = products.filter(p => p.id === params.id)
	if (!product.length) {
		return <NotFound />
	}
	const [{ id, name, price, isLiked, images }] = product

	// сюда стейт



	return (
		<div className={s.productPage}>
			<div className={s.product}>
				<div className={s.like}><ToFavorites id={id} isLiked={isLiked} /></div>
				<div className={s.images}>
					<Slider>
						{images}
					</Slider>
				</div>
				<p className={s.name}>
					{name}
				</p>
				<p className={s.price}>{`${price} ₽`}</p>
			</div>

			{/* сюда description */}

			<Reviews id={id} />
			<div className={s.buttons}>
				<ButtonBlack value='Добавить в корзину' />
			</div>
		</div>
	)
}

export default ProductPage