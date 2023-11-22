import s from './ProductsList.module.scss'
import ProductsItem from './ProductsItem/ProductsItem'
import axios from 'axios'
import { useState, useEffect } from 'react'


type products = {
	id: number,
	name: string,
	price: string,
	rating: number,
	img: string,
	isLiked: Boolean
}

const ProductsList = () => {

	const [products, setProducts] = useState<products[]>([])

	async function fetchPosts() {
		const response = await axios.get('https://65230e39f43b179384153062.mockapi.io/asd')
		setProducts(response.data)

	}

	useEffect(() => {

		fetchPosts()
	}, [])

	const like = (id: number) => {
		setProducts(products.map(p => {
			if (p.id === id) {
				p.isLiked = !p.isLiked
			}
			return p
		}))
	}


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
					like={like}
				/>)}
			</div>
		</div>
	)
}

export default ProductsList