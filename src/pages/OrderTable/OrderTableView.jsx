import {Component} from "react";
import styles from "./OrderTable.module.scss";
import {Modal} from "./Modal/Modal";


export class OrderTableView extends Component {

    render() {
        const {
            isOpen,
            activeRow,
            data,
            handlerAddData,
            toggleTable,
            doubleClick,
            handlerImageUnloader
        } = this.props;

        const image = 'invalid path';

        return (
            <section className={styles['table-section']}>
                <h2>Orders</h2>
                <div className={styles['button-container']}>
                    <Modal handlerAddData={handlerAddData}/>
                </div>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <div>ID</div>
                        <div>Customer</div>
                    </div>
                    <div className={styles.tbody}>
                        <div>
                            {
                                data.map((user, id) => (
                                    <div className={styles.div} key={user.id}>
                                        <div onClick={() => toggleTable(id)} onDoubleClick={doubleClick}
                                             className={`${styles.row} ${id === activeRow ? styles.active : ''}`}>
                                            <div className={styles.cell}>{user.id}</div>
                                            <div>{user.customer}</div>
                                        </div>
                                        <div className={`${styles['inner-table']}
                                        ${id === activeRow && isOpen ? styles['customer-info'] : styles.hidden}`}>
                                            <div className={styles.thead}>
                                                <div>Date</div>
                                                <div>Product</div>
                                                <div>Amount</div>
                                                <div>Price</div>
                                            </div>
                                            <div className={styles.tbody}>
                                                {user['products'].map((product) => (
                                                    <div key={product.id} className={styles['inner-row']}>
                                                        <div className={styles.cell}>2023-02-14</div>
                                                        <div className={styles.cell}>{product.name}</div>
                                                        <div className={styles.cell}>{product.amount}</div>
                                                        <div
                                                            className={styles.cell}>{product.currency}{product.price}</div>
                                                    </div>
                                                ))}
                                                <div className={styles.total}>
                                                    <div className={styles['total-price']}>Total Price</div>
                                                    <div className={styles.price}>{user.totalPriceCurrency}{user.totalPrice}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <img onError={handlerImageUnloader}
                     src={image} alt="zephyr"/>
            </section>
        )
    }
}