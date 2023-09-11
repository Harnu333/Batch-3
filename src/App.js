import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './Pages/Home/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter></BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
