import {Component} from "react";
import styles from "./TodoView.module.scss";
import ButtonView from "../../class_components/Button/ButtonView";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {BUTTON} from "../../constants/constants";
import {withTheme} from "../../class_components/HOC/withTheme";
import Switch from 'react-switch';
import {TodoItemView} from "./TodoItemView";


class TodoView extends Component {
    render() {

        const {
            changeInput,
            isCreatedTodo,
            userValue,
            handlerAddTask,
            todos,
            theme,
            checked,
            toggleTheme,
            label
        } = this.props

        return (
            <section id={styles['todo']}>
                <div className={styles['todo-container']} style={{backgroundColor: theme}}>
                    <div className={styles['todo-row']}>
                        <input className={styles['input']} type="text" placeholder={'New task'}
                               onChange={changeInput}
                               value={userValue}
                        />
                        <ButtonView click={handlerAddTask}
                                    text={'Create'}
                                    variant={BUTTON.ADD}
                        >
                            <FontAwesomeIcon icon={faPlus}/>
                        </ButtonView>
                    </div>

                    {isCreatedTodo && <TodoItemView todos={todos}/>}

                    <div className={styles['toggle-switch']}>
                        <label style={{color: label}} htmlFor="switch">Light Mode</label>
                        <Switch id='switch' checked={checked} onChange={toggleTheme}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default withTheme(TodoView);