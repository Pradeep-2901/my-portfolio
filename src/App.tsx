import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    // 1. Make SURE id="home" is REMOVED from this div
    <div className="min-h-screen text-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Your navbar (with mt-0) */}
        <Navbar />

        {/* You mentioned you reduced the gap, so we'll use mt-8 here */}
        <main className="mt-8">
          
          {/* 2. Make SURE id="home" is ADDED to this hero card div */}
          <div id="home" className="h-[1000px] bg-slate-800 rounded-xl p-8 mb-8">
            <h1 className="text-3xl font-bold text-lime-400">
              Future Hero Section (Placeholder)
            </h1>
            <p className="mt-4">
              Scroll down... This content will slide under the sticky navbar.
            </p>
          </div>
          
          <div id="about" className="h-[1000px] bg-slate-800 rounded-xl p-8">
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