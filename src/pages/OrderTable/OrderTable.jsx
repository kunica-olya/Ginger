import {Component} from "react";
import styles from './OrderTable.module.scss';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

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
                <h2>Orders</h2>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        {settings && settings.map((column, key) => {
                            return <div key={key}>{column.label}</div>
                        })}
                    </div>
                    <div className={styles.tbody}>
                        <div className={styles.column}>
                            {tableData && tableData.map((customer, id) => {
                                const cols = settings.map((col, id2) => {
                                    if (id2 === 0) {
                                        return <div className={styles.cell} key={id2}>{customer[col.label]}</div>
                                    } else {
                                        return <div key={id2}>{customer[col.label]}</div>
                                    }
                                })

                                return <div className={styles.row} key={id}>
                                    {cols}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}






