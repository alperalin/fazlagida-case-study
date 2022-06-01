// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import ArtistDetailPage from './pages/ArtistDetailPage';

// Components
import App from './components/App/App';

// Styles
import './utils/GlobalStyles/style.scss';
import { AppContextProvider } from './context/AppContext';

// React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/artists/:artistId" element={<ArtistDetailPage />} />
              <Route path="*" element={<p>404! Nothing Found!</p>} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
