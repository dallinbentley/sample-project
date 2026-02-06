import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Regions from './pages/Regions';
import Characters from './pages/Characters';
import Artifacts from './pages/Artifacts';
import Lore from './pages/Lore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/artifacts" element={<Artifacts />} />
          <Route path="/lore" element={<Lore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
