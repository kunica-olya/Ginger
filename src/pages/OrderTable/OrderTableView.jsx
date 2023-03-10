import {Component} from "react";
import styles from "./OrderTable.module.scss";
import ButtonView from "../../class_components/Button/ButtonView";


export class OrderTableView extends Component {

    render() {
        const {addElement} = this.props;
        return (
            <section className={styles['table-section']}>
                <h2>Orders</h2>
                <div className={styles['button-container']}>
                    <ButtonView click={(e) => addElement(e)} text={'Add'}/>
                </div>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <div>ID</div>
                        <div>Customer</div>
                    </div>
                    <div className={styles.tbody}>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}