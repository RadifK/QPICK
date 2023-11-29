import ToFavorites from 'src/components/ToFavorites/ToFavorites'
import s from './ProductPage.module.scss'
import ButtonBlack from 'src/components/UI/ButtonBlack/ButtonBlack'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import Slider from 'src/components/UI/Slider/Slider'
import { useParams } from 'react-router'
import NotFound from 'src/components/NotFound/NotFound'
import Reviews from './Reviews/Reviews'



const ProductPage: FC = () => {

	const params = useParams()


	const products = useSelector((state: RootState) => state.products)
	const product = products.filter(p => p.id === params.id)
	if (!product.length) {
		return <NotFound />
	}
	const [{ id, name, price, isLiked, images }] = product




	return (
		<div className={s.productPage}>
			<div className={s.product}>
				<div className={s.like}><ToFavorites id={id} isLiked={isLiked} /></div>
				<div className={s.images}>
					<Slider>
						{images}
					</Slider>
				</div>
				<p className={s.name}>
					{name}
				</p>
				<p className={s.price}>{`${price} ₽`}</p>
			</div>

			<div className={s.description}>
				<div className={s.descTitle}>Описание и характеристики</div>
				<ul>
					<li>Активное шумоподавление: Нет</li>
					<li>Вес: 10 гр</li>
					<li>Влагозащита: Нет</li>
					<li>Длина кабеля: 1.2 м</li>
					<li>Комплектация: Наушники</li>
					<li>Материал корпуса: Пластик, резина</li>
					<li>Микрофон: Да</li>
					<li>Назначение: Проводные наушники</li>
					<li>Ответить/закончить разговор: Да</li>
					<li>Разъем наушников: Lightning</li>
					<li>Тип крепления: Без крепления</li>
					<li>Тип наушников: Вкладыши ("таблетки")</li>
					<li>Тип подключения: Проводное</li>
					<li>Частотный диапазон: 20 Гц - 20000 Гц</li>
					<li>Чувствительность: 109 дБ</li>
				</ul>
			</div>
			<Reviews />
			<div className={s.buttons}>
				<ButtonBlack value='Добавить в корзину' />
			</div>
		</div>
	)
}

export default ProductPage