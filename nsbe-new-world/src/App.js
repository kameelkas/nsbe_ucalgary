import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from './Event'
import Members from './Member'
import { Box } from '@chakra-ui/react'
import Contact from './Contact';
import HomePage from './Home';
import ParticlesComponent from './ParticleBackground';
import NotFound from './defaultPage';
import Volunteer from './GetInvolved';
import About from './About';

function App() {
  return (
    <Router>
      <Box minHeight="100vh" bg='brand.NSBEBlack'>
        <ParticlesComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/events" element={<Event />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-involved" element={<Volunteer />} />
          <Route path="*" element={<NotFound/> } />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
