<<<<<<< HEAD

import './App.css';
import FetchAllUsers from './components/FetchAllUsers';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import FetchUserById from './components/FetchUserById';
import AddUser from './components/AddUser';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/getAllUsers" element={<FetchAllUsers />} />
        <Route path="/user/:userId" element={<FetchUserById />} />
        <Route path="/addUser" element={<AddUser/>} />
      </Routes>
    </BrowserRouter>
  )
=======
import FetchAllOrders from './components/FetchAllOrders/FetchAllOrders';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

          <Route path='/orders/all' element={<FetchAllOrders/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
>>>>>>> 6a4ba4289232af620e834e581a5c3218764735de
}

export default App;


