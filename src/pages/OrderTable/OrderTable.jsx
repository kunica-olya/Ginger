import {OrderTableView} from "./OrderTableView";
import {withLayout} from "../../components/HOC/withLayout";
import React from "react";
import {SORT} from "../../constants/constants";
import {useState, useEffect, useRef} from "react";

const OrderTable = () => {

    const [orders, setOrders] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [originalOrders, setOriginalOrders] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [activeRow, setActiveRow] = useState(null);
    const [directionSort, setDirectionSort] = useState(null);

    const tableRef = useRef(null);


    useEffect(() => {
        fetch('/orders.json')
            .then(response => response.json())
            .then(data => {
                setOrders(data);
                setDataIsLoaded(true);
                setOriginalOrders(data)
            })
            .catch(error => console.error('Error fetching orders_json', error))
        document.addEventListener('keydown', handlerKeyDown);
        return () => {
            document.removeEventListener('keydown', handlerKeyDown);
        }
    }, [])


    const formatResponse = () => {

        let data = [];

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


    const toggleTable = (id) => {
        if (activeRow === id) {
            setIsOpen(!isOpen)
        } else {
            setIsOpen(true)
        }

        setActiveRow(id);
    }

    const handlerAddData = (data) => {
        setOrders([...orders, data]);
    }

    const makeElementInactive = () => {
        toggleTable(null)
    }

    const handlerImageUnloader = () => {
        console.log('Image is unloaded')
    }


    const handlerRemoveElement = (id) => {

        const removedOrders = orders.filter(order => {
            return order.customer.id !== id;
        })

        setOrders([...removedOrders])
    }


    const handlerKeyDown = (e) => {

        tableRef.current.focus();

        if (e.ctrlKey && e.key === 'c') {
            setIsOpen(false);
            setActiveRow(4);
        } else if (e.ctrlKey && e.shiftKey) {
            setIsOpen(false);
            setActiveRow(3);
        } else if (e.altKey && e.key === 'c') {
            setIsOpen(false);
            setActiveRow(2);
        } else if (e.altKey && e.key === 'v') {
            setIsOpen(false);
            setActiveRow(1);
        }
    }


    const handlerSort = () => {

        const originalCopy = [...originalOrders];

        if (directionSort === SORT.ASC) {
            orders.sort((a, b) => {
                const fullNameA = `${a.customer.name.firstName}${a.customer.name.lastName}`
                const fullNameB = `${b.customer.name.firstName}${b.customer.name.lastName}`

                return fullNameA.toLowerCase().localeCompare(fullNameB.toLowerCase());
            })
        }

        if (directionSort === SORT.DESC) {
            orders.reverse()
        }

        setOrders(orders)

        if (directionSort === null) {
            setOrders(originalCopy)
        }
    }


    const handlerToggleSortDirection = () => {

        let newDirectionSort;

        if (directionSort === SORT.ASC) {
            newDirectionSort = SORT.DESC;
        } else if (directionSort === SORT.DESC) {
            newDirectionSort = null;
        } else {
            newDirectionSort = SORT.ASC;
        }

        setDirectionSort(newDirectionSort)
        handlerSort()
    }


    const data = formatResponse();

    return (
        <>
            {dataIsLoaded && <OrderTableView
                data={data}
                isOpen={isOpen}
                activeRow={activeRow}
                toggleTable={toggleTable}
                handlerAddData={handlerAddData}
                handlerRemoveElement={handlerRemoveElement}
                doubleClick={makeElementInactive}
                handlerImageUnloader={handlerImageUnloader}
                tableRef={tableRef}
                handlerKeyDown={handlerKeyDown}
                handlerToggleSortDirection={handlerToggleSortDirection}
            />
            }
        </>
    )
}
export default withLayout(OrderTable);

