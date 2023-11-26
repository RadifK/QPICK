import unlikedHeart from 'src/assets/img/svg/unlikedHeart.svg'
import likedHeart from 'src/assets/img/svg/likedHeart.svg'
import { useDispatch } from 'react-redux'
import { FC, MouseEvent } from 'react'
import { addProductToFavorites, removeFromFavorites } from 'src/redux/slices/favoritesSlice'
import { like } from 'src/redux/slices/productsSlice'
import s from './ToFavorites.module.scss'



interface IToFavoritesProps {
	id: string,
	isLiked: Boolean
}



const ToFavorites: FC<IToFavoritesProps> = ({ id, isLiked }) => {

	const dispatch = useDispatch()

	const likeClickHandler = (e: MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		dispatch(like(id))
		!isLiked ? dispatch(addProductToFavorites(id))
			:
			dispatch(removeFromFavorites(id))

	}

	return (
		<div className={s.likeButton} onClick={likeClickHandler} >
			{!isLiked ?
				<img className={s.like} src={unlikedHeart} alt="" />
				:
				<img className={s.like} src={likedHeart} alt="" />}
		</div>
	)
}

export default ToFavorites