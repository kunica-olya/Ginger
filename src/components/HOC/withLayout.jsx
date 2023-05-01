import PropTypes from 'prop-types';
import HeaderView from '../Header/HeaderView';
import FooterView from '../Footer/FooterView';

export function withLayout(WrappedComponent) {
    return function ({ config, ...props }) {
        return (
          <>
            <HeaderView config={config} />
            <WrappedComponent {...props} />
            <FooterView config={config} />
          </>
        );
    };
}

withLayout.propTypes = {
    config: PropTypes.shape({
        address: PropTypes.string.isRequired,
        phone: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        github_label: PropTypes.string.isRequired,
        github_link: PropTypes.string.isRequired,
        design_label: PropTypes.string.isRequired,
        design_link: PropTypes.string.isRequired,
    })
};
