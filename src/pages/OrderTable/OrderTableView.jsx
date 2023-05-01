import { useTranslation } from 'react-i18next';
import PropTypes, { number } from 'prop-types';
import styles from './OrderTable.module.scss';
import Modal from './Modal/Modal';
import ButtonRemoveView from './ButtonRemove/ButtonRemoveView';

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
    OrderTableView.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        activeRow: PropTypes.number,
        handlerAddData: PropTypes.func.isRequired,
        toggleTable: PropTypes.func.isRequired,
        doubleClick: PropTypes.func.isRequired,
        handlerImageUnloader: PropTypes.func.isRequired,
        handlerRemoveElement: PropTypes.func.isRequired,
        handlerKeyDown: PropTypes.func.isRequired,
        handlerToggleSortDirection: PropTypes.func.isRequired,
        data: PropTypes.arrayOf.isRequired
    };

    OrderTableView.defaultProps = {
        activeRow: number,
    };

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
          <div className={styles.thead}>
            <div>ID</div>
            <h2
              className={styles.sort}
              onClick={handlerToggleSortDirection}
            >
              {t('orderTablePage.customer')}
            </h2>
          </div>
          <div className={styles.tbody}>
            <div>
              {
                            data.map((user) => (
                              <div className={styles.div} key={user.id}>
                                <div
                                  onClick={() => toggleTable(user.id)}
                                  onDoubleClick={doubleClick}
                                  className={`${styles.row} 
                                             ${user.id === activeRow ? styles.active : ''}`}
                                >
                                  <div className={styles['cell-id']}>{user.id}</div>
                                  <div className={styles['cell-customer']}>{user.customer}</div>
                                  <div className={styles['button-remove']}>
                                    <ButtonRemoveView
                                      click={() => handlerRemoveElement(user.id)}
                                    />
                                  </div>
                                </div>
                                <div className={`${styles['inner-table']}
                                        ${user.id === activeRow && isOpen ? styles['customer-info'] : styles.hidden}`}
                                >
                                  <div className={styles.thead}>
                                    <div>{t('orderTablePage.innerTableData')}</div>
                                    <div>{t('orderTablePage.innerTableProduct')}</div>
                                    <div>{t('orderTablePage.innerTableAmount')}</div>
                                    <div>{t('orderTablePage.innerTablePrice')}</div>
                                  </div>
                                  <div className={styles.tbody}>
                                    {user.products.map((product) => (
                                      <div key={product.id} className={styles['inner-row']}>
                                        <div className={styles.cell}>2023-02-14</div>
                                        <div className={styles.cell}>{product.name}</div>
                                        <div className={styles.cell}>{product.amount}</div>
                                        <div className={styles.cell}>
                                          {product.currency}
                                          {product.price}
                                        </div>
                                      </div>
                                            ))}
                                    <div className={styles.total}>
                                      <div className={styles['total-price']}>
                                        {t('orderTablePage.innerTableTotalPrice')}
                                      </div>
                                      <div className={styles.price}>
                                        {user.totalPriceCurrency}
                                        {user.totalPrice}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                        }
            </div>
          </div>
        </table>
        <img
          onError={handlerImageUnloader}
          src={image}
          alt="zephyr"
        />
      </section>
    );
}
