import {Component} from "react";
import {TodoView} from "./TodoView";

export class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            userValue: '',
            isCreatedTodo: false,
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
            userValue: ''
        }))

    }


    render() {
        const {isCreatedTodo, userValue, todos} = this.state;
        return (
            <>
                <TodoView todos={todos}
                          changeInput={this.handlerOnChange}
                          isCreatedTodo={isCreatedTodo}
                          userValue={userValue}
                          handlerAddTask={this.handlerAddTask}
                />
            </>
        )
    }
}
