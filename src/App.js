import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: 'center', marginTop: '60px', fontFamily: 'sans-serif' }}>
      <h1>Hello, Docker! 🐳</h1>
      <p style={{ fontSize: '20px' }}>Кликов: {count}</p>
      <button 
        onClick={() => setCount(c => c + 1)}
        style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer' }}
      >
        Нажми меня
      </button>
    </div>
  );
}

export default App;
