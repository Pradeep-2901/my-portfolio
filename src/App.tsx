import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClickSpark from './components/ClickSpark'; // Import it here

function App() {
  return (
    // Wrap the entire application in ClickSpark
    // We move the 'min-h-screen' and 'text-slate-100' classes here
    <ClickSpark
      sparkColor='#a3e635'
      sparkSize={10}
      sparkRadius={20}
      sparkCount={8}
      duration={400}
      className="min-h-screen text-slate-100"
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Navbar />

        <main>
          <Hero />

          <div id="about" className="h-[1000px] bg-slate-900 rounded-xl p-8 mt-8">
            <h1 className="text-3xl font-bold text-lime-400">
              Future About Section (Placeholder)
            </h1>
          </div>
        </main>

      </div>
    </ClickSpark>
  );
}

export default App;