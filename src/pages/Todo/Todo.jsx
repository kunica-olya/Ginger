import {Component} from "react";
import TodoView from "./TodoView";
import {withLayout} from "../../class_components/HOC/withLayout";
import {THEMES} from "../../constants/constants";
import React from "react";


export const ThemeContext = React.createContext();

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            userValue: '',
            isCreatedTodo: false,
            theme: THEMES.LIGHT,
            checked: false
        }
    }


    componentDidMount() {
        document.addEventListener('keydown', this.handlerKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlerKeyDown);
    }

    handlerKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.handlerAddTask();
        }
    }


    handlerOnChange = (e) => {
        this.setState({
            userValue: e.target.value
        })
    }

    handlerAddTask = () => {

        const {userValue} = this.state;

        if (userValue.trim() === '') {
            return;
        }


        this.setState(({todos}) => ({
            todos: [...todos, userValue],
            isCreatedTodo: true,
            userValue: '',
        }))

    }

    // handlerChangePosition = () => {
    //
    // }


    toggleTheme = () => {

        this.setState(({theme, checked}) => ({
            theme: theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
            checked: !checked
        }))
    }


    render() {

        const {isCreatedTodo, userValue, todos, theme, checked} = this.state;

        return (
            <>
                <ThemeContext.Provider value={{theme, checked, toggleTheme: this.toggleTheme}}>
                    <TodoView todos={todos}
                              changeInput={this.handlerOnChange}
                              isCreatedTodo={isCreatedTodo}
                              userValue={userValue}
                              handlerAddTask={this.handlerAddTask}
                    />
                </ThemeContext.Provider>
            </>
        )
    }
}

export default withLayout(Todo);
