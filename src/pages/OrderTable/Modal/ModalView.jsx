import {Component} from "react";
import styles from './ModalView.module.scss'
import {ButtonView} from "../../../components/Button/ButtonView";
import {BUTTON} from "../../../constants/constants";

export class ModalView extends Component {

    render() {
        const {children, close, changeInput, formReady} = this.props;
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
                                <input onChange={changeInput} id='id' type="text"/>
                            </div>
                            <div>
                                <label htmlFor="firstName">First name</label>
                                <input onChange={changeInput} id="firstName" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="lastName">Last name</label>
                                <input onChange={changeInput} id="lastName" type="text"/>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div>
                                <label htmlFor="productName">Product</label>
                                <input onChange={changeInput} id="productName" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="productPrice">Price</label>
                                <input onChange={changeInput} id="productPrice" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="productAmount">Amount</label>
                                <input onChange={changeInput} id="productAmount" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <ButtonView text={'Cancel'}
                                    click={close}
                                    variant={BUTTON.CANCEL}
                                    className={'different'}
                        />
                        <ButtonView text={'Save'}
                                    click={formReady}
                                    variant={BUTTON.SAVE}
                        />
                    </div>
                </form>
            </div>
        )
    }
}