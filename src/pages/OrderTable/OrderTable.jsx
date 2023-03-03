import {Component} from "react";
import styles from './OrderTable.module.scss';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

export default class TableOrder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            dataIsLoaded: false,
            isOpen: false,
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
                const tableColumns = {};
                tableColumns.id = order.customer.id;
                tableColumns.customer = `${order.customer.name.firstName} ${order.customer.name.lastName}`;
                console.log('tableColumns', tableColumns)
                return tableColumns;
            })
        }

        console.log('data', data)
        return data
    }


    toggleTable = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
        // console.log('click event.target table',event.target)
    }


    render() {

        const data = this.formatResponse();
        const {isOpen} = this.state;

        const userList = data.map((user, id) => (
            <div>
                <div key={id} onClick={this.toggleTable} className={styles.row}>
                    <div className={styles.cell}>{user.id}</div>
                    <div>{user.customer}</div>
                </div>
                <div className={`${styles['inner-table']} ${isOpen ? "" : styles.hidden}`}>
                    <div className={styles.thead}>
                        <div>Date</div>
                        <div>Product</div>
                        <div>Amount</div>
                        <div>Total price</div>
                    </div>
                    <div className={styles.tbody}>
                        <div className={styles.row}>
                            <div className={styles.cell}>2023-01-05</div>
                            <div className={styles.cell}>Currant zephyr</div>
                            <div className={styles.cell}>3</div>
                            <div className={styles.cell}>11.97</div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.cell}>2023-01-05</div>
                            <div className={styles.cell}>Currant zephyr</div>
                            <div className={styles.cell}>3</div>
                        </div>
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







