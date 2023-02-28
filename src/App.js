import './App.css';
import FetchAllUsers from './components/FetchAllUsers';
import FetchUserById from './components/FetchUserById';
import AddUser from './components/AddUser';
import FetchAllOrders from './components/FetchAllOrders/FetchAllOrders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FetchOrderById from './components/FetchOrderById/FetchOrderById';
import CancelOrder from './components/CancelOrder/CancelOrder';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/getAllUsers" element={<FetchAllUsers />} />
          <Route path="/user/:userId" element={<FetchUserById />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path='/orders/all' element={<FetchAllOrders />} />
          <Route path='/orders/details/:orderId' element={<FetchOrderById />} />
          <Route path='/orders/cancel/:orderId' element={<CancelOrder />} />
          <Route path="/user/update/:userId" element={<UpdateUser/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


