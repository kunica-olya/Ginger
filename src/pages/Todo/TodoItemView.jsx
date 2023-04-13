import {Component} from "react";
import styles from "./TodoItemView.module.scss";

export class TodoItemView extends Component {

    render() {

        const {todos} = this.props;

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
}