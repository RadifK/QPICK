import { FC, TextareaHTMLAttributes } from 'react'
import s from './MyTextArea.module.scss'


interface IMyTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	isEmpty?: boolean
}

const MyTextArea: FC<IMyTextArea> = (props) => {
	return (
		<>
			<textarea className={'isEmpty' in props && props.isEmpty ?
				`${s.myTextArea} ${s.required}`
				:
				s.myTextArea} {...props} />
			{'isEmpty' in props && props.isEmpty ?
				<p className={s.requiredFieldWarning}>Заполните это поле</p>
				:
				<></>
			}
		</>
	)
}

export default MyTextArea