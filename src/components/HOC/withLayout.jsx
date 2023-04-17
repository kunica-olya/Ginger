import {HeaderView} from "../Header/HeaderView";
import {FooterView} from "../Footer/FooterView";

export const withLayout = (WrappedComponent) => ({config, ...props}) => {
    return (
        <>
            <HeaderView config={config}/>
            <WrappedComponent {...props} />
            <FooterView config={config}/>
        </>
    )
}
