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
            hotKeys: [],
            directionSort: null,
            originalOrders: []
        }
        this.tableRef = React.createRef();
    }

    componentDidMount() {
        fetch('/orders.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    orders: data,
                    dataIsLoaded: true,
                    originalOrders: data
                })
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
        const {orders} = this.state;

        if (orders) {
            data = orders.map(order => {
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
        this.setState(({orders}) => ({
            orders: [...orders, data]
        }))
    }

    makeElementInactive = () => {
        this.toggleTable(null)
    }

    handlerImageUnloader = () => {
        console.log('Image is unloaded')
    }


    handlerRemoveElement = (id) => {

        const {orders} = this.state;

        const removedOrders = orders.filter(order => {
            return order.customer.id !== id;
        })

        this.setState({
            orders: [...removedOrders]
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


    handlerSort = () => {

        const {orders, originalOrders, directionSort} = this.state;

        const originalCopy = [...originalOrders];

        if (directionSort === 'asc') {
            orders.sort((a, b) => {
                const fullNameA = `${a.customer.name.firstName}${a.customer.name.lastName}`
                const fullNameB = `${b.customer.name.firstName}${b.customer.name.lastName}`

                return fullNameA.toLowerCase().localeCompare(fullNameB.toLowerCase());
            })
            this.setState({
                orders: orders
            })
        }

        if (directionSort === 'desc') {
            orders.sort((a, b) => {
                const fullNameA = `${a.customer.name.firstName}${a.customer.name.lastName}`
                const fullNameB = `${b.customer.name.firstName}${b.customer.name.lastName}`

                return fullNameA.toLowerCase().localeCompare(fullNameB.toLowerCase());
            })
                .reverse()

            this.setState({
                orders: orders
            })
        }

        if (directionSort === null) {
            console.log('sort null')
            this.setState({
                orders: originalCopy,
            })
        }
    }


    handlerToggleSortDirection = () => {

        const {directionSort} = this.state;
        let newDirectionSort;


        if (directionSort === 'asc') {
            newDirectionSort = 'desc';
        } else if (directionSort === 'desc') {
            newDirectionSort = null;
        } else {
            newDirectionSort = 'asc';
        }

        this.setState({
            directionSort: newDirectionSort
        })

        this.handlerSort()
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
                handlerToggleSortDirection={this.handlerToggleSortDirection}
            >
            </OrderTableView>
        )
    }
}

