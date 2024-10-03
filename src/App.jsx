import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Logo from './components/Logo';
import './App.css'

function App() {
  return (
    <>
      <Logo />
      <Nav  />
      <Outlet />
    </>
  );
}

export default App
