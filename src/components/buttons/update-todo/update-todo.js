import styles from './update-todo.module.css';

export const UpdateTodo = ({
	isCompleted,
	isEditing,
	setIsEditing,
	isUpdating,
	requestUpdateTodo,
}) => {
	return (
		<button
			type="submit"
			className={isEditing ? styles.updateBtnActive : styles.updateBtn}
			completed={isCompleted}
			disabled={isUpdating}
			onClick={(event) => {
				event.preventDefault();
				setIsEditing(!isEditing);
				if (isEditing) {
					requestUpdateTodo();
				}
			}}
		>
			✎
		</button>
	);
};
