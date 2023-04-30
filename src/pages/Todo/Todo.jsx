import {TodoView} from "./TodoView";
import {withLayout} from "../../components/HOC/withLayout";
import {THEMES, LABEL, API_KEY, API_URL} from "../../constants/constants";
import React, {useState, useEffect, useCallback} from "react";


export const ThemeContext = React.createContext();


const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [userValue, setUserValue] = useState('');
    const [theme, setTheme] = useState(THEMES.LIGHT);
    const [colorLabel, setColorLabel] = useState(LABEL.SECONDARY);
    const [checked, setChecked] = useState(false);


    const [activeElement, setActiveElement] = useState(null);
    const [overElement, setOverElement] = useState(null);
    const [isDragEnd, setIsDragEnd] = useState(false);


    const createTodo = async (value) => {
        try {
            const response = await fetch(API_URL + "/todos", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"data": {"Text": value}})
                }
            )

            const data = await response.json();

            const formattedData = {
                id: data.data.id,
                task: data.data.attributes.Text
            };

            return formattedData;

        } catch (error) {
            console.log('Error fetching POST data', error)
        }
    }


    const getTodoList = async () => {
        try {
            const response = await fetch(API_URL + "/todos", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                    },
                }
            )

            const data = await response.json();


            const formattedData = data.data.map(item => {
                return {
                    id: item.id,
                    task: item.attributes.Text
                }
            })


            setTodos(formattedData)
            return formattedData;

        } catch (error) {
            console.log('Error fetching POST data', error)
        }
    }

    useEffect(() => {

        async function load() {
            setTodos(await getTodoList())
        }

        load();
    }, [])


    const handlerAddTask = useCallback(async () => {

        if (userValue.trim() === '') {
            return;
        }

        const newTodo = await createTodo(userValue);
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setUserValue('');
    }, [userValue])


    const handlerKeyDown = useCallback((e) => {
        if (e.keyCode === 13) {
            handlerAddTask();
        }
    }, [handlerAddTask])


    useEffect(() => {
        document.addEventListener('keydown', handlerKeyDown);
        return () => {
            document.removeEventListener('keydown', handlerKeyDown);
        }
    }, [handlerKeyDown]);


    const handlerOnChange = (e) => {
        const {value} = e.target;
        setUserValue(value);
    }


    const toggleTheme = () => {

        setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
        setChecked(!checked);
        setColorLabel(theme === THEMES.DARK ? LABEL.SECONDARY : LABEL.PRIMARY)

    }


    const handlerDragStart = (index) => {
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

    const handlerDrop = (index) => {
        const newTodos = [...todos];
        const temp = newTodos[index];
        newTodos[index] = newTodos[activeElement];
        newTodos[activeElement] = temp;

        setActiveElement(null)
        setOverElement(null);
        setTodos(newTodos);
    }

    const isOver = (todoItem) => {
        return overElement && overElement.id === todoItem.id
    }


    return (
        <ThemeContext.Provider
            value={{
                theme,
                checked,
                colorLabel,
                toggleTheme: toggleTheme
            }}>
            <TodoView changeInput={handlerOnChange}
                      userValue={userValue}
                      handlerAddTask={handlerAddTask}
                      todos={todos}
                      isDragEnd={isDragEnd}
                      handlerDragStart={handlerDragStart}
                      handlerDragEnd={handlerDragEnd}
                      handlerDragOver={handlerDragOver}
                      handlerDrop={handlerDrop}
                      isOver={isOver}
            />
        </ThemeContext.Provider>
    )
}

export default withLayout(Todo);
