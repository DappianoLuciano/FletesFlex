import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <InstagramFeed />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
