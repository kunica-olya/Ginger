import {Component} from "react";
import styles from './ModalView.module.scss'
import ButtonView from "../../class_components/Button/ButtonView";


export class ModalView extends Component {

    render() {
        const {isOpen} = this.props;
        return (
            <div className={isOpen ? `${styles['modal-window']}` : `${styles.hidden}`}>
                <h2>Add Element</h2>
                <form action="">
                    <div className={styles.row}>
                        <div className={styles.column}>
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
                        </div>
                        <div className={styles.column}>
                            <div>
                                <label htmlFor="">Price</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label htmlFor="">Amount</label>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <ButtonView text={'Save'}/>
                </form>
            </div>
        )
    }
}