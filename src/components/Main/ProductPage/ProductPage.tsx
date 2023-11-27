import ToFavorites from 'src/components/ToFavorites/ToFavorites'
import s from './ProductPage.module.scss'
import image from 'src/assets/img/pngJpeg/headphones1.png'
import image2 from 'src/assets/img/pngJpeg/headphones2.png'
import image3 from 'src/assets/img/pngJpeg/headphones3.png'
import ButtonBlack from 'src/components/UI/ButtonBlack/ButtonBlack'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import Slider from 'src/components/UI/Slider/Slider'



const ProductPage: FC = () => {

	const productId = useSelector((state: RootState) => state.product)
	const products = useSelector((state: RootState) => state.products)
	const [{ id, name, price, isLiked }] = products.filter(p => p.id === productId)

	// <div className={s.images}>
	// 						<img src={image} alt="" />
	// 						<img src={image2} alt="" />
	// 						<img src={image3} alt="" />
	// 						<img src={image} alt="" />
	// 						<img src={image2} alt="" />
	// 					</div>

	const arr = [image, image2, image3, image, image2]

	return (
		<div className={s.productPage}>
			<div className={s.product}>
				<div className={s.like}><ToFavorites id={id} isLiked={isLiked} /></div>
				<div className={s.images}>
					<Slider>
						{arr}
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
			<div className={s.buttons}>
				<ButtonBlack value='Добавить в корзину' />
			</div>
		</div>
	)
}

export default ProductPage