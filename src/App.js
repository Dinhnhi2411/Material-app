
import './App.css';
// import Button from "@mui/material/Button";
import {Routes, Route, useLocation} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import LoginModal from './components/LoginModal';
import { useContext } from 'react';
import JobDetail from './pages/JobDetail';
import AuthContext from './authen/AuthContext';
import DetailListModal from './components/DetailListModal';




// import SearchAppBar from './components/SearchAppBar';
// import Home from './pages/Home';



function App() {
  const location = useLocation();
  const auth = useContext(AuthContext);
  const state = location.state;

  
  return (
 <>
    <Routes className="App"
    location={
      location.state?.backgroundLocation
      ? location.state.backgroundLocation
      : location
    }
    >
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="job/:id" element={<JobDetail/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
      <Route
      path="*"
      element={
        <main>
          <p>There's nothing here </p>
        </main>
      }
      />
    </Routes>
    {state && auth.user ? (
      <Routes>
        <Route path="/job/:id" element={<DetailListModal/>}></Route>

      </Routes>
    ):(
      <Routes>
        <Route path="/job/:id" element={<LoginModal/>}></Route>
      </Routes>
     
    )}
</>
   
  
  );
}

export default App;
