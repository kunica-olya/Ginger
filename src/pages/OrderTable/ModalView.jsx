import {Component} from "react";
import styles from './ModalView.module.scss'
import ButtonView from "../../class_components/Button/ButtonView";


export class ModalView extends Component {

    render() {
        const {children, close} = this.props;
        return (
            <div className={styles['modal-window']}>
                <div className={styles['modal-content']}></div>
                <div onClick={close} className={styles['close-icon']}>
                    {children}
                </div>
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
                    <div className={styles.buttons}>
                        <ButtonView text={'Cancel'}
                                    click={close}
                                    width='230px'
                                    marginRight='30px'
                        />
                        <ButtonView text={'Save'}
                                    width='250px'
                        />
                    </div>
                </form>
            </div>
        )
    }
}