import s from './ProductsItem.module.scss'
import { FC } from 'react'
import ToFavorites from 'src/components/ToFavorites/ToFavorites'
import { Link } from 'react-router-dom'
import Rating from 'src/components/Rating/Rating'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'


interface IProductsItemProps {
	id: string,
	key: string,
	name: string,
	price: string,
	img: string,
	isLiked: Boolean,
}


const ProductsItem: FC<IProductsItemProps> = ({ name, price, img, isLiked, id }) => {

	const [{ rating }] = useSelector((state: RootState) => state.reviews)
		.filter(r => r.reviewId === id)

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