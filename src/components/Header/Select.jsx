import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { availableLang } from '../../i18n';

export default function Select() {
  const { i18n } = useTranslation();

  const handlerOnChange = (e) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
  };

  return (
    <select className={styles.toggle} onChange={handlerOnChange} value={i18n.language}>
      {
        availableLang.map((option) => (
          <option
            key={option.id}
            value={option.value}
          >
            {option.label}
          </option>
        ))
      }
    </select>
  );
}
