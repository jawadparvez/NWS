import './App.css';
import Header from './MyComponents/Header';
import Features from './MyComponents/Features';
import Pricing from './MyComponents/Pricing';
import ContactForm from './MyComponents/ContactForm';
import Interested from './MyComponents/Interested';
import Footer from './MyComponents/Footer';

function App() {
  return (
    <>
      <Header/>
      <Features/>
      <ContactForm/>
      <Pricing/>
      <Interested/>
      <Footer/>
    </>
  );
}

export default App;
