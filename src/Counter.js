import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [savedValue, setSavedValue] = useState(null);
  const handleSave = () => {
  setSavedValue(count);
};


  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      
      <button onClick={() => setCount(0)}>🔄 Reset</button>
       <br /><br />

  <button onClick={handleSave}>Save</button>

  {/* हे खालचं saved value दाखवेल */}
  {savedValue !== null && (
    <p style={{ marginTop: '20px', fontWeight: 'bold', color: 'green' }}>
      ✅ Saved Value: {savedValue}
    </p>
  )}
  
      
      
    </div>
  );
}

export default Counter;
