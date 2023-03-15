import {Component} from "react";
import styles from './ModalView.module.scss'
import ButtonView from "../../../class_components/Button/ButtonView";


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
                <form>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <div>
                                <label htmlFor="id">ID</label>
                                <input id='id' type="text"/>
                            </div>
                            <div>
                                <label htmlFor="firstName">First name</label>
                                <input id="firstName" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="lastName">Last name</label>
                                <input id="lastName" type="text"/>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div>
                                <label htmlFor="productName">ProductName</label>
                                <input id="productName" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="price">Price</label>
                                <input id="price" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="amount">Amount</label>
                                <input id="amount" type="text"/>
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