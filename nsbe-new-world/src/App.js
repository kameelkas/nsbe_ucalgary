import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from './Event'
import Members from './Member'

function App() {
  return (
      <Router>
        <div minH="100vh">
          <Routes>
            <Route path="/events" element={<Event />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
