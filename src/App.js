import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowSummary from './pages/ShowSummary';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/summary/:id' element={<ShowSummary/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
