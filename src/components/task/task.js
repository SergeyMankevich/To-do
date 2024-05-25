import { useState } from 'react';
import styles from './task.module.css';

export const Task = ({ title, completed }) => {
	const [isCompleted, setIsCompleted] = useState(completed);

	return (
		<div className={styles.task}>
			<input
				className={styles.checkbox}
				checked={isCompleted}
				onChange={() => setIsCompleted(!isCompleted)}
				type="checkbox"
			/>
			{isCompleted ? (
				<div className={styles.descriptionCompletedTask}>{title}</div>
			) : (
				<div className={styles.description}>{title}</div>
			)}
			<button className={styles.deleteBtn}>╳</button>
		</div>
	);
};
