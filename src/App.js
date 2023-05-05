import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from './components/Main/Main';
import OrderTable from './pages/OrderTable/OrderTable';
import Todo from './pages/Todo/Todo';

import './i18n';

export default function App() {
  const [config, setConfig] = useState({});

  useEffect(() => {
    fetch('/app_config.json')
      .then((response) => response.json())
      .then((data) => {
        setConfig(data);
      })
    // eslint-disable-next-line no-console
      .catch((error) => console.log('Error fetching data_json', error));
  }, []);

  return (
    <Routes>
      <Route>
        <Route path="/" element={<Main config={config} />} />
        <Route path="/orders" element={<OrderTable config={config} />} />
        <Route path="/todo" element={<Todo config={config} />} />
      </Route>
    </Routes>
  );
}
