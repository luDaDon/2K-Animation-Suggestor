import FilterPanel from './components/FilterPanel/FilterPanel';
import AnimationList from './components/AnimationList/AnimationList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-white shadow p-4 text-2xl font-bold text-center">
        🏀 Meta Hub
      </header>
      <div className="flex">
        <aside className="w-1/4 p-4 bg-white border-r">
          <FilterPanel />
        </aside>
        <main className="w-3/4 p-4">
          <AnimationList />
        </main>
      </div>
    </div>
  );
}

export default App;