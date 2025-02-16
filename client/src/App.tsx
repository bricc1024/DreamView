import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SleeperUserProvider } from './context/SleeperUserContext';
import LandingPage from './components/LandingPage/LandingPage';
import Leagues from './components/Leagues/Leagues';

const App = () => {
  return (
    <SleeperUserProvider>
      <div className="App">
        <header className="App-header">
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/leagues" element={<Leagues />} />
            </Routes>
          </Router>
        </header>
      </div>
    </SleeperUserProvider>
  );
};

export default App;
