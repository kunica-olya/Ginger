import {Component} from "react";
import styles from './OrderTable.module.scss'

export default class TableOrder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            dataIsLoaded: false
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

    getTableSettings() {
        return this.props?.config?.orders_table;
    }


    formatResponse(settings) {
        let data = [];
        const tableSettings = settings;
        if (tableSettings && this.state.orders) {
            data = this.state.orders.map(order => {
                const tableColumns = {};
                tableColumns.id = order.customer.id;
                tableColumns.customer = `${order.customer.name.firstName} ${order.customer.name.lastName}`;
                return tableColumns;
            })
        }
        data = this.formatTableColumns(tableSettings, data);
        return data
    }

    formatTableColumns(tableSettings, data) {
        return data.map(order => {
            const tableColumns = {};
            tableSettings.forEach(col => {
                tableColumns[col.label] = order[col.field];
            })
            return tableColumns;
        })
    }


    render() {

        const settings = this.getTableSettings();
        const tableData = this.formatResponse(settings);

        return (
            <section className={styles['table-section']}>
                <table className={styles.table}>
                    <caption>Orders</caption>
                    <thead>
                    <tr>
                        {settings && settings.map((column, key) => {
                            return <th key={key}>{column.label}</th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {tableData && tableData.map((column, key1) => {
                        return <tr key={key1}>
                            {settings.map((col, key2) => {
                                return <td key={key1 + key2}>{column[col.label]}</td>
                            })}
                        </tr>
                    })}
                    </tbody>
                </table>
            </section>
        )
    }
}


