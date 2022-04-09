import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import Home from './components/Home';
import Orders from './components/Orders';
import ChartData from './components/ChartData';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="chart" element={<ChartData />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
