import s from './Footer.module.scss'
import vk from '../../assets/img/svg/VK.svg'
import inst from '../../assets/img/svg/Instagram.svg'
import tg from '../../assets/img/svg/Telegram.svg'
import whatsup from '../../assets/img/svg/Whatsapp.svg'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.logo}>QPICK</div>
			<p>Избранное</p>
			<p>Корзина</p>
			<p>Контакты</p>
			<p className={s.service}>Условия сервиса</p>
			<div className={s.socialNetworks}>
				<img src={vk} alt="" />
				<img src={inst} alt="" />
				<img src={tg} alt="" />
				<img src={whatsup} alt="" />
			</div>
		</footer>
	)
}

export default Footer