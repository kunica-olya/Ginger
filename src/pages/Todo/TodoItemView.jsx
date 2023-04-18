import styles from "./TodoItemView.module.scss";

export const TodoItemView = ({todos}) => {

    return (

        <div className={styles['todo-items']}>
            {
                todos.map((todo, index) => (
                    <div draggable={'true'} className={styles['todo-item']}
                         key={index}
                    >
                        {todo}
                    </div>
                ))
            }
        </div>
    )
}