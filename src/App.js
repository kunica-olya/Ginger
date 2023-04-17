import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import OrderTable from "./pages/OrderTable/OrderTable";
import Todo from "./pages/Todo/Todo";
import {useState, useEffect} from "react";

export const App = () => {

    const [config, setConfig] = useState({});


    useEffect(() => {
        fetch('/app_config.json')
            .then(response => response.json())
            .then(data => {
                setConfig(data);
            })
            .catch(error => console.error('Error fetching data_json', error));
    }, [])


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