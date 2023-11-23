import s from './ProductsItem.module.scss'
import unLiked from 'src/assets/img/svg/unlikedHeart.svg'
import liked from 'src/assets/img/svg/likedHeart.svg'
import ratingImg from 'src/assets/img/svg/rating.svg'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { like } from 'src/redux/slices/productsSlice'
import { addProductToFavorites, removeFromFavorites } from 'src/redux/slices/favoritesSlice'


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
	const likeClickHandler = () => {
		dispatch(like(id))
		!isLiked ? dispatch(addProductToFavorites(id))
			:
			dispatch(removeFromFavorites(id))

	}

	return (
		<div className={s.item}>
			<div className={s.likeButton} onClick={likeClickHandler}>
				{!isLiked ? <img className={s.like} src={unLiked} alt="" /> :
					<img className={s.like} src={liked} alt="" />}
			</div>
			<img className={s.productImg} src={img} alt="" />
			<h2 className={s.name}>{name}</h2>
			<p className={s.price}>{`${price} ₽`}</p>
			<div className={s.rating}>
				<img src={ratingImg} alt="" />
				<p>{rating}</p>
			</div>
		</div>
	)
}

export default ProductsItem