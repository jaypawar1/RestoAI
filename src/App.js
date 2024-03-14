import './App.css';
import { Sidebar } from './components/sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='flex flex-row'>
      <Sidebar/>
    <div>
      <Dashboard/>
    </div>
    </div>
  );
}

export default App;
