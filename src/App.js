import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Form from './components/loginFrom/Form';
import Home from './components/loginFrom/Home';

function App() {

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/form' element={<Form />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
