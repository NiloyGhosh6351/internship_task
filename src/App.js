import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup';
import Attendance from './pages/attendance';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/login' element={<Signup currentPage="login"></Signup>}> </Route>
        <Route path='/signup' element={<Signup currentPage="name"></Signup>}> </Route>
        <Route path='/attendance' element={<Attendance></Attendance>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
