import PropTypes from 'prop-types';
import HeaderView from '../Header/HeaderView';
import FooterView from '../Footer/FooterView';

export default function withLayout(WrappedComponent) {
  return function LayoutComponent({ config, ...props }) {
    LayoutComponent.propTypes = {
      config: PropTypes.shape({
        address: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        github_label: PropTypes.string.isRequired,
        github_link: PropTypes.string.isRequired,
        design_label: PropTypes.string.isRequired,
        design_link: PropTypes.string.isRequired,
      })
    };

    LayoutComponent.defaultProps = {
      config: {}
    };

    return (
      <>
        <HeaderView config={config} />
        <WrappedComponent {...props} />
        <FooterView config={config} />
      </>
    );
  };
}
