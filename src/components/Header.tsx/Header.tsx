import { FC } from 'react'
import s from './Header.module.scss'
import favorites from './../../assets/img/svg/headerHeartIcon.svg'
import basket from './../../assets/img/svg/basketIcon.svg'
import { Link } from 'react-router-dom'


const Header: FC = () => {
	return (
		<header className={s.header}>
			<div className={s.logo} >
				<h1>QPICK</h1>
			</div>
			<div className={s.links}>
				<img className={s.favorites} src={favorites} alt="" />
				<img className={s.basket} src={basket} alt="" />
			</div>
		</header>
	)
}

export default Header