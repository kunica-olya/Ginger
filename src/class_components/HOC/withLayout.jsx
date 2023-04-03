import HeaderView from "../Header/HeaderView";
import FooterView from "../Footer/FooterView";
import React from "react";

export default function withLayout(WrappedComponent) {
    return class extends React.Component {
        render() {
            const {config} = this.props;
            return (
                <>
                    <HeaderView config={config}/>
                    <WrappedComponent {...this.props} />
                    <FooterView config={config}/>
                </>
            )
        }
    }
}
