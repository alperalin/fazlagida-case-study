// Imports
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Homepage from '../../pages/Homepage';
import ArtistDetailPage from '../../pages/ArtistDetailPage';

// Style
import './App.css';
const queryClient = new QueryClient();

// Element
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/artists/:artistName" element={<ArtistDetailPage />} />
          <Route path="*" element={<p>404! Nothing Found!</p>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
