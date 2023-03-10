import {Component} from "react";
import {OrderTableView} from "./OrderTableView";
import styles from "./OrderTable.module.scss";

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
                let sum = order.products.reduce((acc, curr) => acc + curr.price * curr.amount, 0);
                return {
                    id: order.customer.id,
                    customer: `${order.customer.name.firstName} ${order.customer.name.lastName}`,
                    products: order.products,
                    totalPrice: sum,
                    totalPriceCurrency: order.products ? order.products[0].currency : ''
                }
            })
        }
        return data
    }


    toggleTable = (id) => {
        let isOpen = !this.state.isOpen;
        if (this.state.activeRow !== id) {
            isOpen = true;
        }
        this.setState(() => ({
            isOpen: isOpen,
            activeRow: id,
        }));
    }

    addElement = () => {

        let element = {
            "orderId": 100010,
            "customer": {
                "id": 5,
                "name": {
                    "firstName": "Ben",
                    "lastName": "Smith"
                },
                "phone": "0994905678",
                "address": {
                    "street": "Murakami",
                    "home": "7",
                    "flat": "10"
                }
            },
            "products": [
                {
                    "id": 8,
                    "name": "Currant zephyr",
                    "price": 27,
                    "currency": "₴",
                    "amount": 10
                }
            ]
        }

        this.setState(prevState => ({
            orders: [...prevState.orders, element]
        }))
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
                                <div className={styles.cell}>{product.currency}{product.price}</div>
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

        return (
            <OrderTableView addElement={this.addElement}>
                {userList}
            </OrderTableView>
        )
    }
}

