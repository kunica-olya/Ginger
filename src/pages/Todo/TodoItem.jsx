import styles from "./TodoItemView.module.scss";
import {useState} from "react";

export const TodoItem = ({isCreatedTodo, todos}) => {

    const [activeElement, setActiveElement] = useState(null);
    const [draggableElement, setDraggableElement] = useState(null)
    const [isDragEnd, setIsDragEnd] = useState(false);


    const handlerDragStart = (id) => {
        setDraggableElement(id)
    }


    const handlerDragEnd = () => {
        setIsDragEnd(true);
        setActiveElement(null);
    }

    const handlerDragOver = (e) => {
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }

    const handlerDrop = () => {
        console.log('drop');
    }

    const handlerDragEnter = (id) => {
        setActiveElement(id);
    }


    return (
        <div>
            {isCreatedTodo && <div className={styles['todo-items']}>
                {
                    todos.map((todo) => (
                        <div draggable={'true'}
                             onDragStart={() => handlerDragStart(todo.id)}
                             onDragEnd={handlerDragEnd}
                             onDragOver={handlerDragOver}
                             onDrop={handlerDrop}
                             onDragEnter={() => handlerDragEnter(todo.id)}
                             className={`${styles['todo-item']}
                                 ${activeElement === todo.id ? 'over' : ''}
                                 ${draggableElement === todo.id ? styles.draggable : ''}
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