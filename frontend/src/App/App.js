import './App.css';

//IMPORT TOOLS
import { Route, Routes } from 'react-router-dom';

//IMPORT COMPONENTS
import Header from '../components/Header/Header';
import Instructions from '../pages/Instructions/Instructions';
import Battleship from '../pages/Battleship/Battleship';
import Replay from '../pages/Replay/Replay';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<Instructions />} name='instructions' />
        <Route path='/battleship' element={<Battleship />} name='battleship' />
        <Route path='/replay' element={<Replay />} name='replay' />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
