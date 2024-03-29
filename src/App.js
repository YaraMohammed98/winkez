import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Details from './Components/Details';
import Interface from './Components/Interface';
import Controll from './Components/Controll';
import Subscription from './Components/Subscription';
import Footer from './Components/Footer';
import Blog from './Components/Blog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Details/>
      <Interface/>
      <Controll/>
      <Subscription/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
