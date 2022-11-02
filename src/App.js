import './App.css';
import Home from './components/home';
import About from './components/about';
import News from './components/news';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <News/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
