import s from './ProductsList.module.scss'
import ProductsItem from './ProductsItem/ProductsItem'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'





const ProductsList = () => {

	const products = useSelector((state: RootState) => state.products)





	return (
		<div className={s.productsList}>
			<h2>Наушники</h2>
			<div className={s.list}>
				{products.map(p => <ProductsItem
					key={p.id}
					name={p.name}
					id={p.id}
					price={p.price}
					rating={p.rating}
					img={p.photo}
					isLiked={p.isLiked}
				/>)}
			</div>
		</div>
	)
}

export default ProductsList