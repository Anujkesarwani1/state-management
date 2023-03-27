import './App.css';
import CandidateList from './components/candidateList';
import CandidateInfo from './components/candidateInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CandidateList />}/>
        <Route path='/candidateInfo' element={<CandidateInfo />}/>
      </Routes>
      {/* <CandidateList /> */}
      {/* <CandidateInfo /> */}
    </BrowserRouter>
  );
}

export default App;