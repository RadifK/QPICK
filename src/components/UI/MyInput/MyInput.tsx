import { FC, InputHTMLAttributes } from 'react'
import s from './MyInput.module.scss'

interface IMyInput extends InputHTMLAttributes<HTMLInputElement> {
	isEmpty?: boolean
}

const MyInput: FC<IMyInput> = (props) => {
	return (

		<>
			<input className={'isEmpty' in props && props.isEmpty ?
				`${s.myInput} ${s.required}`
				:
				s.myInput}
				{...props} type="text" />
			{'isEmpty' in props && props.isEmpty ?
				<p className={s.requiredFieldWarning}>Заполните это поле</p>
				:
				<></>
			}
		</>

	)
}

export default MyInput