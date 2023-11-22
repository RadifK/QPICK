import s from './ProductsItem.module.scss'
import unLiked from './../../../../assets/img/svg/unlikedHeart.svg'
import liked from './../../../../assets/img/svg/likedHeart.svg'
import product from './../../../../assets/img/pngJpeg/Image.png'
import ratingImg from './../../../../assets/img/svg/rating.svg'
import { FC } from 'react'

type TypeProductsItemProps = {
	id: number,
	key: number,
	name: string,
	price: string,
	rating: number,
	img: string,
	isLiked: Boolean,
	like: (id: number) => void
}



const ProductsItem: FC<TypeProductsItemProps> = ({ name, price, rating, img, isLiked, id, like }) => {
	const likeHandler = () => {
		like(id)

	}

	return (
		<div className={s.item}>
			<div className={s.likeButton} onClick={likeHandler}>
				{!isLiked ? <img className={s.like} src={unLiked} alt="" /> :
					<img className={s.like} src={liked} alt="" />}
			</div>
			<img className={s.productImg} src={product} alt="" />
			<h2 className={s.name}>{name}</h2>
			<p className={s.price}>{`${price} ₸`}</p>
			<div className={s.rating}>
				<img src={ratingImg} alt="" />
				<p>{rating}</p>
			</div>
		</div>
	)
}

export default ProductsItem