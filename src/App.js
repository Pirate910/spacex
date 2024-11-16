import './styles/main.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { FavoritesProvider } from './helpers/favorites';

function App() {

  return (
        <div className="App">
            <FavoritesProvider>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/favorites' element={<Favorites />} />
                    </Routes>
                </Router>
            </FavoritesProvider>
        </div>
  );
}

export default App;