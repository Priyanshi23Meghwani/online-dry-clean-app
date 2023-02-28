
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
}

export default App;
