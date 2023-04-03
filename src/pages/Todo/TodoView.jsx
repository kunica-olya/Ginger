import {Component} from "react";
import styles from "./TodoView.module.scss";
import ButtonView from "../../class_components/Button/ButtonView";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {TodoItemView} from "./TodoItemView";


export class TodoView extends Component {
    render() {

        const {
            changeInput,
            isCreatedTodo,
            userValue,
            handlerAddTask,
            todos,
            handlerKeyDown,
            refs,
        } = this.props

        return (
            <section id={styles['todo']}>
                <div className={styles['todo-container']}>
                    <div className={styles['todo-row']}>
                        <input className={styles['input']} type="text" placeholder={'New task'}
                               onChange={changeInput}
                               onKeyDown={handlerKeyDown}
                               value={userValue}
                        />
                        <ButtonView click={handlerAddTask}
                                    text={'Create'}
                                    variant="add"
                        >
                            <FontAwesomeIcon icon={faPlus}/>
                        </ButtonView>
                    </div>
                    <div>
                        {isCreatedTodo && <TodoItemView refs={refs} todos={todos}/>}
                    </div>
                </div>
            </section>
        )
    }
}