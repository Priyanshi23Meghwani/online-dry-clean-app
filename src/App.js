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
}

export default App;


