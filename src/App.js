import Form from './components/form';
import Places from './components/places'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
