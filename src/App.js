import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Form from './components/loginFrom/Form';

function App() {

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/form' element={<Form />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
