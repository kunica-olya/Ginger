import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';

export default function Select() {
                    const { i18n } = useTranslation();

                    const options = [
                                        {
                                                            id: 1,
                                                            label: 'En',
                                                            value: 'en',
                                        },
                                        {
                                                            id: 2,
                                                            label: 'Ua',
                                                            value: 'ua',
                                        },
                                        {
                                                            id: 3,
                                                            label: 'Tu',
                                                            value: 'tu',
                                        },
                    ];

                    const handlerOnChange = (e) => {
                                        const { value } = e.target;
                                        i18n.changeLanguage(value);
                                        localStorage.setItem('lng', value);
                    };

                    return (
                      <select className={styles.toggle} onChange={handlerOnChange}>
                        {
                                                                                options.map((option) => (
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
