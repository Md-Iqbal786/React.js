import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
     <div className="container">
            <input value={text} onChange={handleChange} />
          <p>You typed: {text}</p>
          <button onClick={() => setText('hello')}>
            Reset
          </button>
     </div>
    </>
  );
}
