import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    /* HERE IS THE FIX:
      - REMOVED: 'bg-slate-900' from this div.
      - KEPT: 'min-h-screen' and 'text-slate-100' (to set default text color)
      Now, your background from index.css will be visible.
    */
    <div className="min-h-screen text-slate-100">
      
      {/* This container still centers everything */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* This navbar has its own 'mt-8' and glass background */}
        <Navbar />

        {/* This main content has 'mt-8' to create the gap */}
        <main className="mt-8">
          
          {/* Your placeholder card. We'll make this dark later. */}
          <div className="h-[1000px] bg-slate-800 rounded-xl p-8 mb-8">
            <h1 className="text-3xl font-bold text-lime-400">
              Future Hero Section (Placeholder)
            </h1>
            <p className="mt-4">
              Scroll down... This content will slide under the sticky navbar.
            </p>
          </div>
          
          {/* Future content */}
          <div className="h-[1000px] bg-slate-800 rounded-xl p-8">
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
