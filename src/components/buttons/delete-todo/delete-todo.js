import styles from './delete-todo.module.css';
import { useRequestDeleteTodos } from '../../../hooks';

export const DeleteTodo = ({ id, isRemoving, setIsRemoving }) => {
	const { isDeleting, requestDeleteTodo } = useRequestDeleteTodos({
		id,
	});

	return (
		<button
			className={styles.deleteBtn}
			disabled={isDeleting}
			onClick={() => {
				setIsRemoving(!isRemoving);
				requestDeleteTodo();
			}}
		>
			╳
		</button>
	);
};
