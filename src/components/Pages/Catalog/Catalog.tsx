
import ProductsList from './ProductsList/ProductsList'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'


const Catalog = () => {

	const products = useSelector((state: RootState) => state.products)

	return (
		<>
			{/* место для баннера */}
			<ProductsList products={products} />

		</>
	)
}

export default Catalog