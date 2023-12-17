import ToFavorites from 'src/components/ToFavorites/ToFavorites'
import s from './ProductPage.module.scss'
import ButtonBlack from 'src/components/UI/ButtonBlack/ButtonBlack'
import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useParams } from 'react-router'
import NotFound from 'src/components/NotFound/NotFound'
import Reviews from './Reviews/Reviews'
import { FaChevronDown } from 'react-icons/fa'
// сюда импорт


const ProductPage: FC = () => {

	const params = useParams()


	const products = useSelector((state: RootState) => state.products)
	const product = products.filter(p => p.id === params.id)
	if (!product.length) {
		return <NotFound />
	}
	const [{ id, name, price, isLiked, images }] = product

	const [descView, setDescView] = useState(false)



	return (
		<div className={s.productPage}>
			<div className={s.product}>
				<div className={s.like}><ToFavorites id={id} isLiked={isLiked} /></div>
				<div className={s.images}>
					{/* сюда вставляй компонент */}
				</div>
				<p className={s.name}>
					{name}
				</p>
				<p className={s.price}>{`${price} ₽`}</p>
			</div>

			<div className={s.description}>
				<div className={s.descTitle}>
					<p>
						Описание и характеристики
					</p>
					<div className={!descView ? s.chevrone
						:
						`${s.chevrone} ${s.chevroneOpened}`}>
						<FaChevronDown
							onClick={() => { setDescView(!descView) }} />
					</div>
				</div>


				{descView ?
					<ul >
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
					:
					<>
					</>}

			</div>

			<Reviews id={id} />
			<div className={s.buttons}>
				<ButtonBlack value='Добавить в корзину' />
			</div>
		</div>
	)
}

export default ProductPage