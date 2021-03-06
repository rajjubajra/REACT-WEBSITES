import {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import {useDispatch, useSelector} from 'react-redux';
import {actionFetchCheckout} from './redux/action';
import Cart from './components/Cart';
import CartQty from './components/Cart/CartQty';


function App() {

  const dispatch = useDispatch();

  const [checkoutId, setCheckoutId] = useState('');

  console.log(checkoutId);

  useEffect(()=>{
      setCheckoutId(localStorage.getItem("checkout"))
  },[])

  //const checkoutId = useSelector( state => state.reducerCreateCheckout.checkout_id );
  const checkoutdata = useSelector(state => state.reducerCreateCheckout.data);

  useEffect(()=>{
    checkoutId && dispatch(actionFetchCheckout(checkoutId));
  },[dispatch, checkoutId])

  return (
    <div>
      <BrowserRouter>
      Shopify shop 
      <div>
        <Link to="/">Products List</Link>
      </div>
      <div>
        Cart : <CartQty />
      </div>
      <div>
      </div>

        <Switch>
          <Route exact path="/" >
          <Products />
          </Route>
          <Route path="/item/:id" >
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App