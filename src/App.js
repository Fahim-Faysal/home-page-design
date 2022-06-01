import './App.css';
import Available from './components/Available/Available';
import Detail from './components/Detail/Detail';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import Middlebanner from './components/Middlebanner/Middlebanner';
import Versitilead from './components/Versitilead/Versitilead';

function App() {
  return (
    <div className="App">
      <Logo />
      <Available />
      <Versitilead />
      <Detail />
      <Middlebanner />
      <Footer />
    </div>
  );
}

export default App;
