import {Component} from "react";
import {TodoView} from "./TodoView";
import React from "react";

export class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            refs: [],
            userValue: '',
            isCreatedTodo: false,
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handlerKeyDown)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const {todos, refs} = this.state;
        const length = todos.length - 1;
        if (refs[length]) {
            const draggableItem = refs[length].current;
            draggableItem.addEventListener('dragstart', this.handlerDragStart);
            draggableItem.addEventListener('dragend', this.handlerDragEnd);
            draggableItem.addEventListener('dragenter', this.handlerDragEnter);
            draggableItem.addEventListener('dragleave', this.handlerDragLeave);
            draggableItem.addEventListener('dragover', this.handlerDragOver);
            draggableItem.addEventListener('drop', this.handlerDrop);
        }
    }

    componentWillUnmount() {
        const {refs} = this.state;
        refs.forEach((item) => {
            const draggableItem = item.current;
            draggableItem.removeEventListener('dragstart', this.handlerDragStart);
            draggableItem.removeEventListener('dragend', this.handlerDragEnd);
            draggableItem.removeEventListener('dragenter', this.handlerDragEnter);
            draggableItem.removeEventListener('dragleave', this.handlerDragLeave);
            draggableItem.removeEventListener('dragover', this.handlerDragOver);
            draggableItem.removeEventListener('drop', this.handlerDrop);
        })
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

        const {userValue, todos, refs} = this.state;

        if (userValue.trim() === '') {
            return;
        }

        const refsCopy = [...refs];
        const index = todos.length;
        refsCopy[index] = React.createRef();

        this.setState(({todos}) => ({
            todos: [...todos, userValue],
            isCreatedTodo: true,
            userValue: '',
            refs: refsCopy
        }))

    }


    handlerDragStart = (e) => {
        e.target.style.opacity = '0.4';
        this.dragElem = e.target;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
    }

    handlerDragEnd = (e) => {
        console.log('dragEnd');
        e.target.style.opacity = '1';
    }

    handlerDragEnter = (e) => {
        console.log('handlerDragEnter');
        e.target.classList.add('over');
    }

    handlerDragLeave = (e) => {
        e.target.classList.remove('over');
    }

    handlerDragOver = (e) => {
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }

    handlerDrop = (e) => {
        e.stopPropagation();
        if (this.dragElem !== e.target) {
            this.dragElem.innerHTML = e.target.innerHTML;
            e.target.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false;
    }


    render() {
        const {isCreatedTodo, userValue, todos, refs} = this.state;
        return (
            <>
                <TodoView todos={todos}
                          changeInput={this.handlerOnChange}
                          isCreatedTodo={isCreatedTodo}
                          userValue={userValue}
                          handlerAddTask={this.handlerAddTask}
                          handlerKeyDown={this.handlerKeyDown}
                          refs={refs}
                />
            </>
        )
    }
}
