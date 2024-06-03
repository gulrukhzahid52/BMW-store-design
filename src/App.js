import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Aboutus from './Components/Aboutus'
import Ourvideos from './Components/Ourvideos'
import Ourcars from './Components/Ourcars'
import BMWcollection from './Components/BMWcollection'
import Message from './Components/Message'
import Footer from './Components/Footer'

function App() {
  return (
   <>
   <Navbar/> 
   <Hero/>
   <Aboutus/>
   <Ourvideos/>
   <Ourcars/>
   <BMWcollection/>
   <Message/>
   <Footer/>
   </>
  );
}

export default App;
