import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import './global.css';

function App() {
  return (
    <div>
      <header>This is the header</header>
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
