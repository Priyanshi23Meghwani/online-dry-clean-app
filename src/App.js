import './App.css';
import FetchAllUsers from './components/FetchAllUsers';
import FetchUserById from './components/FetchUserById';
import AddUser from './components/AddUser';
import FetchAllOrders from './components/FetchAllOrders/FetchAllOrders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/getAllUsers" element={<FetchAllUsers />} />
          <Route path="/user/:userId" element={<FetchUserById />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path='/orders/all' element={<FetchAllOrders />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


