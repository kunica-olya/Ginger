import {Component} from "react";
import {OrderTableView} from "./OrderTableView";

export default class OrderTable extends Component {

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
        this.setState(({isOpen, activeRow}) => ({
            isOpen: activeRow !== id ? true : !isOpen,
            activeRow: id,
        }))
        console.log('isOpen', this.state.isOpen)
        console.log('activeRow', this.state.activeRow)
    }

    handlerAddData = (data) => {
        const newArray = this.state.orders;
        newArray.push(data);
        this.setState({
            orders: newArray
        })
    }

    makeElementInactive = () => {
        console.log('double click')
        this.toggleTable(null)
    }

    render() {

        const data = this.formatResponse();
        const {isOpen, activeRow} = this.state;

        return (
            <OrderTableView
                data={data}
                isOpen={isOpen}
                activeRow={activeRow}
                toggleTable={this.toggleTable}
                handlerAddData={this.handlerAddData}
                doubleClick={this.makeElementInactive}
            >
            </OrderTableView>
        )
    }
}

