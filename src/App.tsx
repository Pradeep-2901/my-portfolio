import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Import the new Hero component

function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Navbar />

        {/* Removed mt-8 from main, as the Hero section itself will create its own top spacing */}
        <main>
          {/* Render your Hero component here */}
          <Hero />

          {/* This is your "About" section placeholder, which will remain for now */}
          <div id="about" className="h-[1000px] bg-slate-800 rounded-xl p-8 mt-8">
            <h1 className="text-3xl font-bold text-lime-400">
              Future About Section (Placeholder)
            </h1>
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;