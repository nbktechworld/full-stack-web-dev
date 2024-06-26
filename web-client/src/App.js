import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import './global.css';

function App() {
  return (
    <div>
      <header className="site-header">
        <h1><a href="index.html" className="site-header-heading">FSWD</a></h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        Copyright &copy; Full Stack Web Dev
      </footer>
    </div>
  );
}

export default App;
