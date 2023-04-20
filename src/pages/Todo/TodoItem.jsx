import styles from "./TodoItemView.module.scss";
import {useState, useContext} from "react";
import {TodosContext} from "./Todo";

export const TodoItem = () => {

    const todo = useContext(TodosContext);

    const [activeElement, setActiveElement] = useState(null);
    const [overElement, setOverElement] = useState(null);
    const [isDragEnd, setIsDragEnd] = useState(false);

    const handlerDragStart = (id) => {
        const index = todo.todos.findIndex(i => i.id === id)
        setActiveElement(index);
    }

    const handlerDragEnd = () => {
        setIsDragEnd(true);
        setActiveElement(null);
        setOverElement(null);
    }

    const handlerDragOver = (e, todo) => {
        e.preventDefault();
        setOverElement(todo);
    }

    const handlerDrop = (targetId) => {
        const index = todo.todos.findIndex(i => i.id === targetId)
        const newTodos = [...todo.todos];
        const temp = newTodos[index];
        newTodos[index] = newTodos[activeElement];
        newTodos[activeElement] = temp;

        setActiveElement(null)
        setOverElement(null);
        todo.setTodos(newTodos);
    }

    const isOver = (todoItem) => {
        return overElement && overElement.id === todoItem.id
    }

    return (
        <div>
            {todo.isCreatedTodo && <div className={styles['todo-items']}>
                {
                    todo.todos.map((todo) => (
                        <div draggable={'true'}
                             onDragStart={() => handlerDragStart(todo.id)}
                             onDragEnd={handlerDragEnd}
                             onDragOver={(e) => handlerDragOver(e, todo)}
                             onDrop={() => handlerDrop(todo.id)}
                             className={`${styles['todo-item']}
                                 ${isOver(todo) ? styles.over : ''}
                                 ${isDragEnd ? styles.dragend : ''}
                                 `}

                             key={todo.id}
                        >
                            {todo.task}
                        </div>
                    ))}
            </div>
            }
        </div>
    )
}