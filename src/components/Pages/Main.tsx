import s from './Main.module.scss'
import { Route, Routes } from 'react-router'
import Catalog from './Catalog/Catalog'
import ProductPage from './ProductPage/ProductPage'
import Favorites from './Favorites/Favorites'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotFound from '../NotFound/NotFound'


const Main = () => {

	const { pathname } = useLocation();


	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className={s.main}>
			<Routes>
				<Route path='/' element={<Catalog />} />
				<Route path='/product/:id?' element={<ProductPage />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>

		</div>
	)
}

export default Main