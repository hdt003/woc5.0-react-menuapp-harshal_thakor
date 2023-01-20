import NavBar from './components/Navbar';
import Area from './components/Area';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <>
    <NavBar/>
    <Router>
        <Routes>
            <Route path="/" element={<Area/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
