import React, {
  useState, useEffect, useRef, useCallback, useMemo
} from 'react';
import OrderTableView from './OrderTableView';
import withLayout from '../../components/HOC/withLayout';
import { SORT } from '../../constants/constants';

function OrderTable() {
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [originalOrders, setOriginalOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeRow, setActiveRow] = useState(null);
  const [directionSort, setDirectionSort] = useState(null);

  const tableRef = useRef(null);

  useEffect(() => {
    fetch('/orders.json')
      .then((response) => response.json())
      .then((data) => {
        setOriginalOrders(data);
        setDataIsLoaded(true);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Error fetching orders_json', error));
  }, []);

  const formattedOrders = useMemo(() => {
    return originalOrders.map((order) => {
      const sum = order.products.reduce((acc, curr) => acc + curr.price * curr.amount, 0);
      return {
        id: order.customer.id,
        customer: `${order.customer.name.firstName} ${order.customer.name.lastName}`,
        products: order.products,
        totalPrice: sum,
        totalPriceCurrency: order.products ? order.products[0].currency : ''
      };
    });
  }, [originalOrders]);

  const orders = useMemo(() => {
    const originalCopy = [...formattedOrders];
    if (directionSort === SORT.ASC) {
      originalCopy.sort((a, b) => {
        const fullNameA = `${a.customer}`.replace(' ', '');
        const fullNameB = `${b.customer}`.replace(' ', '');
        return fullNameA.toLowerCase()
          .localeCompare(fullNameB.toLowerCase());
      });
    } else if (directionSort === SORT.DESC) {
      originalCopy.reverse();
    }
    return originalCopy;
  }, [formattedOrders, directionSort]);

  const handlerKeyDown = useCallback((e) => {
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
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handlerKeyDown);
    return () => {
      document.removeEventListener('keydown', handlerKeyDown);
    };
  }, [handlerKeyDown]);

  const toggleTable = (id) => {
    if (activeRow === id) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }

    setActiveRow(id);
  };

  const handlerAddData = (data) => {
    setOriginalOrders([...originalOrders, data]);
  };

  const makeElementInactive = () => {
    toggleTable(null);
  };

  const handlerImageUnloader = () => {
    // eslint-disable-next-line no-console
    console.log('Image is unloaded');
  };

  const handlerRemoveElement = (id) => {
    const removedOrders = originalOrders.filter((order) => {
      return order.customer.id !== id;
    });

    setOriginalOrders([...removedOrders]);
  };

  const handlerToggleSortDirection = () => {
    let newDirectionSort;

    if (directionSort === SORT.ASC) {
      newDirectionSort = SORT.DESC;
    } else if (directionSort === SORT.DESC) {
      newDirectionSort = null;
    } else {
      newDirectionSort = SORT.ASC;
    }

    setDirectionSort(newDirectionSort);
  };

  return (
    <div>
      {dataIsLoaded && (
        <OrderTableView
          data={orders}
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
      )}
    </div>
  );
}

export default withLayout(OrderTable);
