import React from 'react'
import s from './Favorites.module.scss'
import ProductsList from '../Catalog/ProductsList/ProductsList'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import ButtonBlack from 'src/components/UI/ButtonBlack/ButtonBlack'
import { Link } from 'react-router-dom'


const Favorites = () => {

	const allProducts = useSelector((state: RootState) => state.products)
	const favoriteProducts = allProducts.filter(p => p.isLiked === true)

	return (
		<div className={s.favorites}>
			<h2 className={s.title}>Избранное</h2>
			{favoriteProducts.length ? <ProductsList products={favoriteProducts} /> :
				<div className={s.emptyFavorites}>
					<div className={s.emptyFavoritesText}>Ничего не добавлено</div>
					<Link className={s.toCatalog} to={'/'}><ButtonBlack value='Перейти в каталог' /></Link>
				</div>
			}


		</div>
	)
}

export default Favorites