import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddUser from './pages/AddUser';
import UserProfile from './pages/UserProfile';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/user/:id" element={<UserProfile />} />
    </Routes>
  );
}
