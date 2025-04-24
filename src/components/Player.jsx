import { useRef } from 'react';
import { useState } from 'react';

export default function Player() {
  const inputVal = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(inputVal.current.value);
    inputVal.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown'}</h2>
      <p>
        <input ref={inputVal} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
