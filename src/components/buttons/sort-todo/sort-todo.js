import styles from './sort-todo.module.css';
import sortIcon from '../../../assets/image/sort.png';

export const SortTodo = ({ isSorting, setIsSorting }) => {
	return (
		<button
			className={styles.sortBtn}
			onClick={() => {
				setIsSorting(!isSorting);
			}}
		>
			<img
				src={sortIcon}
				alt="sortIcon"
				className={isSorting ? styles.sortIconActive : styles.sortIcon}
			/>
		</button>
	);
};
// 🠑
