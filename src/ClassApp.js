import {Component} from 'react';
import Main from './class_components/Main/Main';
import {Route, Routes} from "react-router-dom";
import OrderTable from "./pages/OrderTable/OrderTable";
import {Todo} from "./pages/Todo/Todo";
import withLayout from "./class_components/HOC/withLayout";

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
        const {config} = this.state;

        const WrappedMain = withLayout(Main);
        const WrappedOrderTable = withLayout(OrderTable);
        const WrappedTodo = withLayout(Todo);

        return (
            <>
                <Routes>
                    <Route>
                        <Route path="/" element={<WrappedMain config={config}/>}/>
                        <Route path="/orders" element={<WrappedOrderTable config={config}/>}/>
                        <Route path="/todo" element={<WrappedTodo config={config}/>}/>
                    </Route>
                </Routes>
            </>
        )
    }
}