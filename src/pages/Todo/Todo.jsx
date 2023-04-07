import {Component} from "react";
import {TodoView} from "./TodoView";
import {withLayout} from "../../class_components/HOC/withLayout";

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            userValue: '',
            isCreatedTodo: false,
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

    handlerChangePosition = () => {

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

export default withLayout(Todo);
