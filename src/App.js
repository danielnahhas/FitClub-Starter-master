import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
function App() {
  return (
    <div className="App">
         <Hero />
         <Programs />
         <Reasons />
         <Footer />
    </div>
  );
}

export default App;
