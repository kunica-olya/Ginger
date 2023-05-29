import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MainView from './layout/Main/MainView';
import OrderTable from './pages/OrderTable/OrderTable';
import Todo from './pages/Todo/Todo';
import './i18n';

export default function App() {
  const [config, setConfig] = useState({});

  const getConfig = async () => {
    const {
      data,
      error
    } = await axios.get('/app_config.json');
    setConfig(data);
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <Routes>
      <Route>
        <Route path="/" element={<MainView config={config} />} />
        <Route path="/orders" element={<OrderTable config={config} />} />
        <Route path="/todo" element={<Todo config={config} />} />
      </Route>
    </Routes>
  );
}
