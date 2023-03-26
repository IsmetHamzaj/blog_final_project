import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Views from './Routes';


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
