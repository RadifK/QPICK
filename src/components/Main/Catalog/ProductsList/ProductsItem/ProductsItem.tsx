import s from './ProductsItem.module.scss'
import ratingImg from 'src/assets/img/svg/rating.svg'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import ToFavorites from 'src/components/ToFavorites/ToFavorites'
import { changeProductPage } from 'src/redux/slices/productPageSlice'
import { Link } from 'react-router-dom'


type TypeProductsItemProps = {
	id: string,
	key: string,
	name: string,
	price: string,
	rating: number,
	img: string,
	isLiked: Boolean,
}


const ProductsItem: FC<TypeProductsItemProps> = ({ name, price, rating, img, isLiked, id }) => {

	const dispatch = useDispatch()

	const toProductPage = () => {
		dispatch(changeProductPage(id))
	}

	return (
		<Link to={'/product'}>
			<div className={s.item} onClick={toProductPage}>
				<ToFavorites isLiked={isLiked} id={id} />
				<img className={s.productImg} src={img} alt="" />
				<h2 className={s.name}>{name}</h2>
				<p className={s.price}>{`${price} ₽`}</p>
				<div className={s.rating}>
					<img src={ratingImg} alt="" />
					<p>{rating}</p>
				</div>
			</div>
		</Link>
	)
}

export default ProductsItem