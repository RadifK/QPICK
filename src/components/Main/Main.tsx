import s from './Main.module.scss'
import { Route, Routes } from 'react-router'
import Catalog from './Catalog/Catalog'
import ProductPage from './ProductPage/ProductPage'
import Favorites from './Favorites/Favorites'


const Main = () => {
	return (
		<div className={s.main}>
			<Routes>
				<Route path='/' element={<Catalog />} />
				<Route path='/product' element={<ProductPage />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>

		</div>
	)
}

export default Main