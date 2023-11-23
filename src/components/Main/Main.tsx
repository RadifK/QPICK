import { Route, Routes } from 'react-router'
import Catalog from './Catalog/Catalog'
import ProductPage from './ProductPage/ProductPage'


const Main = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Catalog />} />
				<Route path='/product' element={<ProductPage />} />
			</Routes>

		</>
	)
}

export default Main