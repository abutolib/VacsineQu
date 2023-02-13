import './App.css'
import Header from './componanets/Header/Header';
import Hero from './componanets/Hero/Hero';
import Vacsines from './componanets/Vacsines/Vacsines'
import SheuldeVac from './componanets/SheuldeVac/SheuldeVac'
import Important from './componanets/Important/Important';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Vacsines/>
      <SheuldeVac/>
      <Important/>
    </div>
  );
}

export default App;
