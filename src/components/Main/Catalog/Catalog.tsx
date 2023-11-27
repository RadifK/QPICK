import Banner from './Banner/Banner'
import ProductsList from './ProductsList/ProductsList'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'


const Catalog = () => {

	const products = useSelector((state: RootState) => state.products)

	return (
		<>
			<Banner />
			<ProductsList products={products} />

		</>
	)
}

export default Catalog