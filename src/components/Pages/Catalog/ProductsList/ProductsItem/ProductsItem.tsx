import s from './ProductsItem.module.scss'
import { FC } from 'react'
import ToFavorites from 'src/components/ToFavorites/ToFavorites'
import { Link } from 'react-router-dom'
import Rating from 'src/components/Rating/Rating'


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

	return (
		<Link to={`/product/${id}`}>
			<div className={s.item} >
				<ToFavorites isLiked={isLiked} id={id} />
				<img className={s.productImg} src={img} alt="" />
				<h2 className={s.name}>{name}</h2>
				<p className={s.price}>{`${price} ₽`}</p>
				<Rating value={rating} />
			</div>
		</Link >
	)
}

export default ProductsItem