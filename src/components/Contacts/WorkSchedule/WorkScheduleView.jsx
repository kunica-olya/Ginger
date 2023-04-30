import { useTranslation } from 'react-i18next';
import styles from './WorkSchedule.module.scss';

export default function WorkScheduleView() {
  const { t } = useTranslation();

  return (
    <div className={styles.schedule}>
      <h2 className={styles.title}>{t('contacts.subtitle')}</h2>
      <ul>
        <li>
          <strong>{t('contacts.week.monFri')}</strong>
          {t('contacts.week.openingHours')}
        </li>
        <li>
          <strong>{t('contacts.week.sat')}</strong>
          {t('contacts.week.openingHoursSat')}
        </li>
        <li>
          <strong> 
            {' '}
            {t('contacts.week.sun')}
          </strong>
          {t('contacts.week.openingHoursSun')}
        </li>
      </ul>
    </div>
  );
}
