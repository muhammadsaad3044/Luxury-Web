import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Approach from './components/Approach.jsx';
import Process from './components/Process.jsx';
import Collection from './components/Collection.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

function LandingPage() {
  return (
    <div className="bg-[#F5F0EB] text-[#1A1A1A]">
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Process />
        <Collection />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
