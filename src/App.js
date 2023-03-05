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
import AddOrder from './components/Order/AddOrder';
import UpdateAddress from './components/Address/UpdateAddress';
import Login from './components/Login';
import UpdateOrderLineItem from './components/OrderLineItem/UpdateOrderLineItem';
import ChangeOrderStatus from './components/Order/ChangeOrderStatus';
import AddService from './components/Service/addService';
import DeleteService from './components/Service/deleteService';
import Footer from './components/Home/Footer';

import HomePage from './components/Dashboards/HomePage';
import AdminOrderControls from './components/Dashboards/AdminOrderControls';
import Header from './components/Dashboards/Header';
import FetchOrderByUserId from './components/Order/FetchOrderByUserId';
import ViewOrderByStatus from './components/Order/ViewOrderByStatus';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/customer" element={<HomePage/>}/>
          <Route path="/admin" element={<HomePage/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/users" element={<FetchAllUsers/>} />
          <Route path="/user/:userId" element={<FetchUserById/>} />
          <Route path="/addUser" element={<AddUser/>} />
          <Route path="/user/update/:userId" element={<UpdateUser/>} />

          <Route path='/orders/all' element={<FetchAllOrders/>} />
          <Route path='/orders/details/:orderId' element={<FetchOrderById/>} />
          <Route path='/user/orders/:userId' element={[<Header/>,<FetchOrderByUserId/>]} />
          <Route path='/orders/status/' element={[<Header/>,<ViewOrderByStatus/>]} />

          <Route path='/orders/cancel' element={<CancelOrder/>} />
          <Route path='/orders/add' element={<AddOrder/>} />
          <Route path='/order/details/update/:itemId' element={<UpdateOrderLineItem/>} />
          <Route path="/order/status/:orderId" element={[<Header/>,<ChangeOrderStatus/>]} />

          <Route path='/updateAddress/:addressId' element={<UpdateAddress/>}/>

          <Route path='/services/getall' element={<GetAllServices />} />
          <Route path='/service/add' element={[<Header/>,<AddService />]} />
          <Route path='/service/delete' element={[<Header/>,<DeleteService />]} />
          <Route path='/footer' element={<Footer />} />

          <Route path='/admin/orders' element={[<Header/>,<AdminOrderControls />]} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


