import FilterPanel from './components/FilterPanel/FilterPanel';
import AnimationList from './components/AnimationList/AnimationList';
import { useState } from 'react';
import React from 'react';
import axios from 'axios';

function App() {
  const [threePt, setThreePt] = useState('');
  const [ballHandle, setBallHandle] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/animations', {
        params: {
          threePt: threePt || undefined,
          ballHandle: ballHandle || undefined
        }
      });
      setResults(response.data)
    } catch (error) {
      console.error("Error fetching the animations: ", error)
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Search NBA 2K Animations</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="number"
          placeholder="3PT Rating"
          value={threePt}
          onChange={(e) => setThreePt(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Ball Handle"
          value={ballHandle}
          onChange={(e) => setBallHandle(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Results:</h2>
        {results.length === 0 ? (
          <p>No animations found.</p>
        ) : (
          <ul className="space-y-2">
            {results.map((animation) => (
              <li key={animation.id} className="border p-2 rounded">
                {animation.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;