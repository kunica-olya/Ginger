import {Component} from 'react';
import HeaderView from './class_components/Header/HeaderView';
import Main from './class_components/Main/Main';
import FooterView from './class_components/Footer/FooterView';
import { Route, Routes } from "react-router-dom";
import OrderTable from "./pages/OrderTable/OrderTable";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: {},
        }
    }

    componentDidMount() {
        fetch('/app_config.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    config: data
                });
            })
            .catch(error => console.error('Error fetching app_config_json', error));
    }

    render() {
        const {config} = this.state

        return (
            <>
                <HeaderView config={config}/>
                <Routes>
                    <Route>
                        <Route path="/" element={<Main config={config}/>} />
                        <Route path="/orders" element={<OrderTable config={config}/>} />
                    </Route>
                </Routes>
                <FooterView config={config}/>
            </>
        )
    }
}