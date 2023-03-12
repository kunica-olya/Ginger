import {Component} from "react";
import styles from './ModalView.module.scss'


export class ModalView extends Component {
    render() {
        return (
            <div className={styles['modal-window']}>
                <h2>Add Element</h2>
                <form action="">
                    <div>
                        <label htmlFor="">ID</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">First name</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">Last name</label>
                        <input type="text"/>
                    </div>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}