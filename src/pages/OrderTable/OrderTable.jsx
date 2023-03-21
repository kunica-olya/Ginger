import {Component} from "react";
import {OrderTableView} from "./OrderTableView";
import React from "react";

export default class OrderTable extends Component {


    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            dataIsLoaded: false,
            isOpen: false,
            activeRow: null,
            hotKeys: []
        }
        this.tableRef = React.createRef();
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
        document.addEventListener('keydown', this.handlerKeyDown);
        document.addEventListener('keyup', this.handlerKeyUp);
        this.tableRef.current.focus();
    }


    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlerKeyDown);
        document.removeEventListener('keyup', this.handlerKeyUp);
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
    }

    handlerAddData = (data) => {
        const newArray = this.state.orders;
        newArray.push(data);
        this.setState({
            orders: newArray
        })
    }

    makeElementInactive = () => {
        this.toggleTable(null)
    }

    handlerImageUnloader = () => {
        console.log('Image is unloaded')
    }


    handlerRemoveElement = (id) => {

        const filteredOrders = this.state.orders.filter(order => {
            return order.customer.id !== id;
        })

        this.setState({
            orders: filteredOrders
        })
    }


    handlerKeyDown = (e) => {

        const keys = this.state.hotKeys;

        if (!keys.includes(e.key)) {
            keys.push(e.key)
        }
    }


    handlerKeyUp = () => {
        const pressedKeys = this.state.hotKeys;

        this.setState({
            hotKeys: []
        })

        if (pressedKeys.includes('Control') && pressedKeys.includes('c')) {
            this.setState({
                isOpen: false,
                activeRow: 4
            })
        }

        if (pressedKeys.includes('Control') && pressedKeys.includes('Shift')) {
            this.setState({
                isOpen: false,
                activeRow: 3
            })
        }

        if (pressedKeys.includes('Alt') && pressedKeys.includes('c')) {
            this.setState({
                isOpen: false,
                activeRow: 2
            })
        }

        if (pressedKeys.includes('Control') && pressedKeys.includes('Shift') && pressedKeys.includes('S')) {
            this.setState({
                isOpen: false,
                activeRow: 1
            })
        }
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
                handlerRemoveElement={this.handlerRemoveElement}
                doubleClick={this.makeElementInactive}
                handlerImageUnloader={this.handlerImageUnloader}
                tableRef={this.tableRef}
                handlerKeyDown={this.handlerKeyDown}
            >
            </OrderTableView>
        )
    }
}

