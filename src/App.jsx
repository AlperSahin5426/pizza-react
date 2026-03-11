import { useState } from 'react';
import './App.css';
import OrderPage from './Pages/OrderPage';
import SuccessPage from './Pages/SuccessPage';
import HomePage from './Pages/HomePage';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [order, setOrder] = useState({
    name: '',
    size: '',
    dough: '',
    toppings: [],
    note: '',
    quantity: 1,
  });

  const [orderResponse, setOrderResponse] = useState(null);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/order">
          <OrderPage
            order={order}
            setOrder={setOrder}
            setOrderResponse={setOrderResponse}
          />
        </Route>

        <Route path="/success">
          <SuccessPage orderResponse={orderResponse} order={order} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;