import {TodoView} from "./TodoView";
import {withLayout} from "../../components/HOC/withLayout";
import {THEMES, LABEL} from "../../constants/constants";
import React, {useState, useEffect} from "react";


export const ThemeContext = React.createContext();
export const TodosContext = React.createContext();

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [userValue, setUserValue] = useState('');
    const [isCreatedTodo, setIsCreatedTodo] = useState(false);
    const [theme, setTheme] = useState(THEMES.LIGHT);
    const [colorLabel, setColorLabel] = useState(LABEL.SECONDARY);
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        document.addEventListener('keydown', handlerKeyDown);
        return () => {
            document.removeEventListener('keydown', handlerKeyDown);
        }
    })


    const handlerKeyDown = (e) => {
        if (e.keyCode === 13) {
            handlerAddTask();
        }
    }


    const handlerOnChange = (e) => {
        const {value} = e.target;
        setUserValue(value);

    }

    const handlerAddTask = () => {

        if (userValue.trim() === '') {
            return;
        }

        const newTodo = {id: todos.length, task: userValue};
        setTodos([...todos, newTodo]);
        setIsCreatedTodo(true);
        setUserValue('');
    }


    const toggleTheme = () => {

        setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
        setChecked(!checked);
        setColorLabel(theme === THEMES.DARK ? LABEL.SECONDARY : LABEL.PRIMARY)

    }


    return (
        <ThemeContext.Provider value={{theme, checked, colorLabel, toggleTheme: toggleTheme}}>
            <TodosContext.Provider value={{todos, isCreatedTodo, setTodos}}>
                <TodoView changeInput={handlerOnChange}
                          userValue={userValue}
                          handlerAddTask={handlerAddTask}
                />
            </TodosContext.Provider>
        </ThemeContext.Provider>
    )
}

export default withLayout(Todo);
