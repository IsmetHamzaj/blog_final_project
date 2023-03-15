import './App.css';
import axios from 'axios'
function App() {
  axios.get("http://localhost:3000/api/blogs")
    .then(res => {
      console.log(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
