import {Component} from "react";
import {OrderTableView} from "./OrderTableView";
import React from "react";

export default class OrderTable extends Component {

    constructor(props) {
        super(props)

        this.tableRef = React.createRef();

        this.state = {
            orders: [],
            dataIsLoaded: false,
            isOpen: false,
            activeRow: null,
            activeTabIndex: 0,
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
        document.addEventListener('keydown', this.handlerKeyDownControl);
        document.addEventListener('keydown', this.handlerKeyDownShift);
        this.tableRef.current.focus();
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

    handlerKeyDownControl = (e) => {
        console.log('keydown', e.key);
        if (e.key === 'Control') {
            this.setState({
                isOpen: false,
                activeRow: 0
            })
            console.log('подсвечиваем активный таб')
        }
    }

    handlerKeyDownShift = (e) => {
        console.log('keydown', e.key);
        if (e.key === 'Shift') {
            this.setState({
                isOpen: false,
                activeRow: this.state.orders.length - 1
            })
        }
    }


    handlerRemoveElement = (id) => {

        const newOrders = this.state.orders.filter(customer => {
            return customer.customer.id !== id;
        })

        this.setState({
            orders: newOrders
        })
    }


    render() {

        const data = this.formatResponse();
        const {isOpen, activeRow} = this.state;


        return (
            <OrderTableView
                tableRef={this.tableRef}
                data={data}
                isOpen={isOpen}
                activeRow={activeRow}
                toggleTable={this.toggleTable}
                handlerAddData={this.handlerAddData}
                handlerRemoveElement={this.handlerRemoveElement}
                doubleClick={this.makeElementInactive}
                handlerImageUnloader={this.handlerImageUnloader}
                handlerKeyDownControl={this.handlerKeyDownControl}
            >
            </OrderTableView>
        )
    }
}

