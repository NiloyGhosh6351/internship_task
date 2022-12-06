import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup';
import Attendance from './pages/attendance';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/login' element={<Signup currentPage="login"></Signup>}> </Route>
        <Route path='/attendance' element={<Attendance></Attendance>}> </Route>
        <Route path='/' element={<Signup currentPage="name"></Signup>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
