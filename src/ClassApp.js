import {Component} from 'react';
import Header from './class_components/Header/Header';
import Main from './class_components/Main/Main';
import Footer from './class_components/Footer/Footer';
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
                <Header config={config}/>
                <Routes>
                    <Route>
                        <Route path="/" element={<Main config={config}/>} />
                        <Route path="/orders" element={<OrderTable config={config}/>} />
                    </Route>
                </Routes>
                <Footer config={config}/>
            </>
        )
    }
}