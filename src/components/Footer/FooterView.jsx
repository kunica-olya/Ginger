import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../../assets/svg/Logo-white.svg';
import styles from './Footer.module.scss';

export function FooterView({ config }) {
  const { t } = useTranslation();

  const { author } = config;
  const github = {
    label: config.github_label,
    link: config.github_link,
  };

  const design = {
    label: config.design_label,
    link: config.design_link,
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['footer-container']}>
          <a className={styles.logo} href="/">
            <Logo />
          </a>
          <div className={styles['footer-info']}>
            <nav>
              <ul>
                <li><a href="#menu">{t('footer.menu')}</a></li>
                <li><a href="#gallery">{t('footer.gallery')}</a></li>
                <li><a href="#about-us">{t('footer.aboutUs')}</a></li>
              </ul>
            </nav>
            <div className={styles.copyright}>{t('footer.copyright')}</div>
          </div>
          <div className={styles.creator}>
            {author !== null ? (
              <ul>
                <li>{t('footer.creatorAuthor')}</li>
                <li>
                  <a
                    className={styles['creator-link']}
                    href={github.link}
                  >
                    {t('footer.creatorGithub')}
                  </a>
                </li>
                <li>
                  <a
                    className={styles['creator-link']}
                    href={design.link}
                  >
                    {t('footer.creatorDesign')}
                  </a>
                </li>
              </ul>
            ) : (
              <p>No data</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
