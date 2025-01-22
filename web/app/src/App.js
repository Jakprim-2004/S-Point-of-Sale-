import logo from './logo.svg';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Category from "./pages/Category";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sale" element={<Sale />} />
      
      {/* Protect owner-only routes */}
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      {/* Add PrivateRoute to other owner-only routes */}
      
      {/* ...other routes... */}
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}

export default App;
