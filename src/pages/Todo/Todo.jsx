import React, { useState, useEffect, useCallback } from 'react';
import TodoView from './TodoView';
import withLayout from '../../components/HOC/withLayout';
import {
  THEMES,
} from '../../constants/constants';
import ThemeContext from '../../context/ThemeContext';
import { useCreateTodoMutation, useFetchTodosQuery } from '../../store/apis/extendedApi';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [userValue, setUserValue] = useState('');
  const [theme, setTheme] = useState(THEMES.LIGHT);

  const [activeElement, setActiveElement] = useState(null);
  const [overElement, setOverElement] = useState(null);
  const [isDragEnd, setIsDragEnd] = useState(false);

  const [createTodo] = useCreateTodoMutation();
  const {
    data,
  } = useFetchTodosQuery({ sort: 'id:desc' });

  useEffect(() => {
    if (data) {
      const formattedData = data.data.map((item) => {
        return {
          id: item.id,
          task: item.attributes.Text
        };
      });
      setTodos(formattedData);
    }
  }, [data]);

  const handlerAddTask = useCallback(async () => {
    if (!userValue.trim()) {
      return;
    }

    const newTodo = await createTodo(userValue);
    setTodos((prevTodos) => [...prevTodos, newTodo.data.data]);
    setUserValue('');
  }, [userValue]);

  const handlerKeyDown = useCallback((e) => {
    if (e.keyCode === 13) {
      handlerAddTask();
    }
  }, [handlerAddTask]);

  useEffect(() => {
    document.addEventListener('keydown', handlerKeyDown);
    return () => {
      document.removeEventListener('keydown', handlerKeyDown);
    };
  }, [handlerKeyDown]);

  const handlerOnChange = (e) => {
    const { value } = e.target;
    setUserValue(value);
  };

  const toggleTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  const handlerDragStart = (index) => {
    setActiveElement(index);
  };

  const handlerDragEnd = () => {
    setIsDragEnd(true);
    setActiveElement(null);
    setOverElement(null);
  };

  const handlerDragOver = (e, todo) => {
    e.preventDefault();
    setOverElement(todo);
  };

  const handlerDrop = (index) => {
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[activeElement];
    newTodos[activeElement] = temp;

    setActiveElement(null);
    setOverElement(null);
    setTodos(newTodos);
  };

  const isOver = (todoItem) => {
    return overElement && overElement.id === todoItem.id;
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}
    >
      <TodoView
        changeInput={handlerOnChange}
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
  );
}

export default withLayout(Todo);
