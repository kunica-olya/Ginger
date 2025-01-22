import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './sass/OrderTable.module.scss';
import Modal from './components/Modal';
import ButtonRemoveView from './components/ButtonRemoveView';

export default function OrderTableView({
  isOpen,
  activeRow,
  data,
  handlerAddData,
  toggleTable,
  doubleClick,
  handlerImageUnloader,
  handlerRemoveElement,
  handlerKeyDown,
  tableRef,
  handlerToggleSortDirection
}) {
  const image = 'invalid path';

  const { t } = useTranslation();

  return (
    <section className={styles['table-section']}>
      <h2>{t('orderTablePage.title')}</h2>
      <div className={styles['button-container']}>
        <Modal handlerAddData={handlerAddData} />
      </div>
      <table
        className={styles.table}
        ref={tableRef}
        onKeyDown={handlerKeyDown}
      >
        <thead className={styles.thead}>
          <tr>
            <th className={styles['title-id']}>ID</th>
            <th className={styles['title-customer']} onClick={handlerToggleSortDirection}>
              {t('orderTablePage.customer')}
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map((user) => (
            <React.Fragment key={user.id}>
              <tr
                onClick={() => toggleTable(user.id)}
                onDoubleClick={doubleClick}
                className={`${styles.row} ${
                  user.id === activeRow ? styles.active : ''
                }`}
              >
                <td className={styles['cell-id']}>{user.id}</td>
                <td className={styles['cell-customer']}>{user.customer}</td>
                <td className={styles['button-remove']}>
                  <ButtonRemoveView click={() => handlerRemoveElement(user.id)} />
                </td>
              </tr>
              <tr
                className={`${styles['inner-table']} ${
                  user.id === activeRow && isOpen ? styles['customer-info'] : styles.hidden
                }`}
              >
                <td>
                  <table className={styles['inner-table']}>
                    <thead>
                      <tr>
                        <th className={styles.data}>{t('orderTablePage.innerTableData')}</th>
                        <th className={styles.cell}>{t('orderTablePage.innerTableProduct')}</th>
                        <th className={styles.cell}>{t('orderTablePage.innerTableAmount')}</th>
                        <th className={styles.cell}>{t('orderTablePage.innerTablePrice')}</th>
                      </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                      {user.products.map((product) => (
                        <tr key={product.id} className={styles['inner-row']}>
                          <td className={styles.cell}>2023-02-14</td>
                          <td className={styles.cell}>{product.name}</td>
                          <td className={styles.cell}>{product.amount}</td>
                          <td className={styles.cell}>
                            {product.currency}
                            {product.price}
                          </td>
                        </tr>
                      ))}
                      <tr className={styles.total}>
                        <td className={styles['total-price']}>
                          {t('orderTablePage.innerTableTotalPrice')}
                        </td>
                        <td className={styles.price}>
                          {user.totalPriceCurrency}
                          {user.totalPrice}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <img
        onError={handlerImageUnloader}
        src={image}
        alt="zephyr"
      />
    </section>
  );
}

OrderTableView.propTypes = {
  isOpen: PropTypes.bool,
  activeRow: PropTypes.number,
  handlerAddData: PropTypes.func,
  toggleTable: PropTypes.func,
  doubleClick: PropTypes.func,
  handlerImageUnloader: PropTypes.func,
  handlerRemoveElement: PropTypes.func,
  handlerKeyDown: PropTypes.func,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  handlerToggleSortDirection: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      customer: PropTypes.string,
      totalPrice: PropTypes.number,
      totalPriceCurrency: PropTypes.string,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          amount: PropTypes.number,
          currency: PropTypes.string,
          price: PropTypes.number,
        })
      ).isRequired
    }).isRequired
  ).isRequired
}.isRequired;
