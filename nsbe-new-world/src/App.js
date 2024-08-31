import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from './Event'
import Members from './Member'
import { Box } from '@chakra-ui/react'


function App() {
  return (
      <Router>
        <Box minHeight="100vh" bg='brand.NSBEBlack'>
          <Routes>
            <Route path="/events" element={<Event />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </Box>
      </Router>
  );
}

export default App;
