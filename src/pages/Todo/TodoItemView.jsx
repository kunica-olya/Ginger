import {Component} from "react";
import styles from "./TodoItemView.module.scss"

export class TodoItemView extends Component {

    componentDidMount() {
        let items = document.querySelectorAll(`.${styles['todo-items']}`)
        items.forEach((item) => {
            item.addEventListener('dragstart', this.handlerDragStart);
            item.addEventListener('dragenter', this.handlerDragEnter);
            item.addEventListener('dragleave', this.handlerDragLeave);
            item.addEventListener('dragover', this.handlerDragOver);
            item.addEventListener('dragend', this.handlerDragEnd);
            item.addEventListener('drop', this.handlerDrop);
        })
    }


    handlerDragStart = (e) => {
        e.target.style.opacity = '0.4';
        this.dragElem = e.target;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
    }

    handlerDragEnd = (e) => {
        e.target.style.opacity = '1';
        let items = document.querySelectorAll(`.${styles['todo-items']}`)
        items.forEach((item) => {
            item.classList.remove('over');
        })
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


    handlerDragEnter = (e) => {
        e.target.classList.add('over');
    }

    handlerDragLeave = (e) => {
        e.target.classList.remove('over');
    }


    render() {

        const {todos} = this.props;

        return (
            <div className={styles['todo-items']}>
                {
                    todos.map((todo, index) => (
                        <div draggable={'true'} className={styles['todo-item']} key={index}>{todo}</div>
                    ))
                }
            </div>
        )
    }
}