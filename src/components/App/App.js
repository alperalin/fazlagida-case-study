// Imports
import { QueryClient, QueryClientProvider } from 'react-query';

// Style
import './App.css';
const queryClient = new QueryClient();

// Element
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App"></div>
    </QueryClientProvider>
  );
}

export default App;
