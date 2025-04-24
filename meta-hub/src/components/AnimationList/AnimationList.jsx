// src/components/AnimationList.jsx
function AnimationList() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">LaMelo Ball Base</h3>
          <p className="text-sm text-gray-600">Type: Jump Shot</p>
          <p className="mt-2">Requirements: 3PT ≥ 85, Height ≤ 6'9"</p>
        </div>
        {/* More cards coming soon */}
      </div>
    );
  }
  
  export default AnimationList;
  