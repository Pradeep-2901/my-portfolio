import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    // We replaced "bg-slate-900" with our new radial gradient class:
    <div className="min-h-screen">
      
      <Navbar />

      <div className="pt-20 text-center text-white">
        <h1 className="text-3xl font-bold">
          My Styled Navbar is Working!
        </h1>
        <p className="text-slate-300">This content is below the navbar.</p>
      </div>

    </div>
  );
}

export default App;
