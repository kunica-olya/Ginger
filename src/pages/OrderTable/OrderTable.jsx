import {Component} from "react";
import styles from './OrderTable.module.scss';

export default class TableOrder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            dataIsLoaded: false,
            isOpen: false,
            activeRow: null,
        }
    }

    componentDidMount() {
        fetch('/orders.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    orders: data,
                    dataIsLoaded: true
                });
            })
            .catch(error => console.error('Error fetching orders_json', error))

    }

    formatResponse() {
        let data = [];
        if (this.state.orders) {
            data = this.state.orders.map(order => {
                return {
                    id: order.customer.id,
                    customer: `${order.customer.name.firstName} ${order.customer.name.lastName}`,
                    products: order.products
                }
            })
        }
        return data
    }


    toggleTable = (id) => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
            activeRow: id
        }));
    }


    render() {

        const data = this.formatResponse();
        const {isOpen, activeRow} = this.state;

        const userList = data.map((user, id) => (
            <div className={styles.div} key={user.id}>
                <div onClick={() => this.toggleTable(id)}
                     className={`${styles.row} ${id === activeRow ? styles.active : ''}`}>
                    <div className={styles.cell}>{user.id}</div>
                    <div>{user.customer}</div>
                </div>
                <div className={`${styles['inner-table']} ${isOpen ? "" : styles.hidden}`}>
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
                                <div className={styles.cell}>{product.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ))

        return (
            <section className={styles['table-section']}>
                <h2>Orders</h2>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <div>ID</div>
                        <div>Customer</div>
                    </div>
                    <div className={styles.tbody}>
                        <div>
                            {userList}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


