import './App.css';
import FetchAllUsers from './components/User/FetchAllUsers';
import FetchUserById from './components/User/FetchUserById';
import AddUser from './components/User/AddUser';
import FetchAllOrders from './components/Order/FetchAllOrders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FetchOrderById from './components/Order/FetchOrderById';
import CancelOrder from './components/Order/CancelOrder';
import UpdateUser from './components/User/UpdateUser';
import GetAllServices from './components/Service/getAllServices';
import UpdateAddress from './components/Address/UpdateAddress';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

          <Route path="/users" element={<FetchAllUsers/>} />
          <Route path="/users/:userId" element={<FetchUserById/>} />
          <Route path="/addUser" element={<AddUser/>} />
          <Route path="/user/update/:userId" element={<UpdateUser/>} />

          <Route path='/orders/all' element={<FetchAllOrders/>} />
          <Route path='/orders/details/:orderId' element={<FetchOrderById/>} />
          <Route path='/orders/cancel' element={<CancelOrder/>} />
        
          <Route path='/services/getall' element={<GetAllServices />} />

          <Route path='/updateAddress/:addressId' element={<UpdateAddress/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


