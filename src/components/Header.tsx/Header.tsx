import { FC } from 'react'
import s from './Header.module.scss'
import favoritesImg from 'src/assets/img/svg/headerHeartIcon.svg'
import basket from 'src/assets/img/svg/basketIcon.svg'
import MyCounter from './counter/MyCounter'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { Link } from 'react-router-dom'


const Header: FC = () => {

	const favorites = useSelector((state: RootState) => state.products).filter(p => p.isLiked)

	return (

		<header className={s.header}>
			<div className={`${s.header__content} _content`}>

				<div className={s.logo} >
					<Link to={'/'}><h1>QPICK</h1></Link>
				</div>
				<div className={s.links}>
					<Link to={'/favorites'} className={s.favorites}>
						<div className={s.favoritesCounter}>
							<MyCounter counter={favorites.length} />
						</div>
						<img src={favoritesImg} alt="" />
					</Link>

					<div className={s.basket}>
						<div className={s.basketCounter}>
							<MyCounter counter={0} />
						</div>
						<img src={basket} alt="" />
					</div>
				</div>

			</div>
		</header>

	)
}

export default Header