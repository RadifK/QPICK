import s from './ProductsList.module.scss'
import ProductsItem from './ProductsItem/ProductsItem'
import { FC } from 'react'
import { productsType } from 'src/types/productsType'

interface IPropsProductsList {
	products: productsType[]
}


const ProductsList: FC<IPropsProductsList> = ({ products }) => {

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
					img={p.img}
					isLiked={p.isLiked}
				/>)}
			</div>
		</div>
	)
}

export default ProductsList