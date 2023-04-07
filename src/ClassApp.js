import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./class_components/Main/Main";
import OrderTable from "./pages/OrderTable/OrderTable";
import Todo from "./pages/Todo/Todo";

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


        return (
            <>
                <Routes>
                    <Route>
                        <Route path="/" element={<Main config={config}/>}/>
                        <Route path="/orders" element={<OrderTable config={config}/>}/>
                        <Route path="/todo" element={<Todo config={config}/>}/>
                    </Route>
                </Routes>
            </>
        )
    }
}