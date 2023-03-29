import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Views from './Routes';
import { useDispatch, useSelector } from 'react-redux';


function App({ user }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    </div>
  );
}

export default App;